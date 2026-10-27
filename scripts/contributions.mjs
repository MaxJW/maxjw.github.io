import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const snapshotFile = new URL('../src/lib/data/contributions.json', import.meta.url);
const quietDaysBeforeKeepingSnapshot = 21;
const dayInMs = 24 * 60 * 60 * 1000;
const yearInMs = 365 * dayInMs;

const token = process.env.GITHUB_TOKEN;
if (!token) {
	console.error(
		'GITHUB_TOKEN is not set. Try: GITHUB_TOKEN=$(gh auth token) npm run contributions'
	);
	process.exit(1);
}

async function fetchCalendar(range = '') {
	const query = `{
		viewer {
			contributionsCollection${range} {
				contributionCalendar {
					totalContributions
					weeks { contributionDays { date contributionCount } }
				}
			}
		}
	}`;
	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({ query })
	});
	if (!response.ok) {
		console.error(`GitHub responded ${response.status}: ${await response.text()}`);
		process.exit(1);
	}
	const { data, errors } = await response.json();
	if (errors) {
		console.error(errors);
		process.exit(1);
	}
	const calendar = data.viewer.contributionsCollection.contributionCalendar;
	return {
		total: calendar.totalContributions,
		days: calendar.weeks.flatMap((week) => week.contributionDays)
	};
}

const lastYear = await fetchCalendar();
const lastYearStart = new Date(`${lastYear.days[0].date}T00:00:00Z`).getTime();
const yearBefore = await fetchCalendar(
	`(from: "${new Date(lastYearStart - yearInMs).toISOString()}", to: "${new Date(lastYearStart - 1000).toISOString()}")`
);

const lastYearDates = new Set(lastYear.days.map((day) => day.date));
const days = [...yearBefore.days.filter((day) => !lastYearDates.has(day.date)), ...lastYear.days];

const recentlyQuiet = days
	.slice(-quietDaysBeforeKeepingSnapshot)
	.every((day) => day.contributionCount === 0);

if (existsSync(snapshotFile) && recentlyQuiet) {
	const kept = JSON.parse(readFileSync(snapshotFile, 'utf8'));
	console.log(
		`Last ${quietDaysBeforeKeepingSnapshot} days are empty; keeping the snapshot from ${kept.to}.`
	);
	process.exit(0);
}

const snapshot = {
	from: days[0].date,
	to: days.at(-1).date,
	total: lastYear.total,
	counts: days.map((day) => day.contributionCount)
};

writeFileSync(snapshotFile, JSON.stringify(snapshot) + '\n');
console.log(
	`Saved ${snapshot.counts.length} days (${snapshot.from} to ${snapshot.to}); ${snapshot.total} in the last year.`
);
