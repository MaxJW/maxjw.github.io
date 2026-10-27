import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const snapshotFile = new URL('../src/lib/data/contributions.json', import.meta.url);
const quietDaysBeforeKeepingSnapshot = 21;
const dayInMs = 24 * 60 * 60 * 1000;
const yearInMs = 365 * dayInMs;

function keepSnapshot(reason) {
	if (!existsSync(snapshotFile)) {
		console.error(`${reason}, and there is no snapshot to fall back on.`);
		process.exit(1);
	}
	const kept = JSON.parse(readFileSync(snapshotFile, 'utf8'));
	console.warn(`${reason}; keeping the snapshot from ${kept.to}.`);
	process.exit(0);
}

const token = process.env.GITHUB_TOKEN;
if (!token) {
	keepSnapshot('GITHUB_TOKEN is not set (try GITHUB_TOKEN=$(gh auth token) npm run contributions)');
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
	if (!response.ok) throw new Error(`GitHub responded ${response.status}`);
	const { data, errors } = await response.json();
	if (errors) throw new Error(`GitHub returned errors: ${JSON.stringify(errors)}`);
	const calendar = data.viewer.contributionsCollection.contributionCalendar;
	return {
		total: calendar.totalContributions,
		days: calendar.weeks.flatMap((week) => week.contributionDays)
	};
}

async function fetchTwoYears() {
	const lastYear = await fetchCalendar();
	const lastYearStart = new Date(`${lastYear.days[0].date}T00:00:00Z`).getTime();
	const yearBefore = await fetchCalendar(
		`(from: "${new Date(lastYearStart - yearInMs).toISOString()}", to: "${new Date(lastYearStart - 1000).toISOString()}")`
	);
	const lastYearDates = new Set(lastYear.days.map((day) => day.date));
	return {
		total: lastYear.total,
		days: [...yearBefore.days.filter((day) => !lastYearDates.has(day.date)), ...lastYear.days]
	};
}

const { total, days } = await fetchTwoYears().catch((error) =>
	keepSnapshot(`Could not fetch contributions (${error.message})`)
);

const recentlyQuiet = days
	.slice(-quietDaysBeforeKeepingSnapshot)
	.every((day) => day.contributionCount === 0);

if (recentlyQuiet) keepSnapshot(`The last ${quietDaysBeforeKeepingSnapshot} days are empty`);

const snapshot = {
	from: days[0].date,
	to: days.at(-1).date,
	total,
	counts: days.map((day) => day.contributionCount)
};

writeFileSync(snapshotFile, JSON.stringify(snapshot) + '\n');
console.log(
	`Saved ${snapshot.counts.length} days (${snapshot.from} to ${snapshot.to}); ${snapshot.total} in the last year.`
);
