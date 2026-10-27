import contributions from '#lib/data/contributions.json';

export const cell = 30;
export const step = 35;
export const gap = step - cell;

const animatedWeeks = 60;
const daysPerWeek = 7;

const levelOf = (count: number) =>
	count === 0 ? 0 : count <= 5 ? 1 : count <= 15 ? 2 : count <= 35 ? 3 : 4;

const firstWeekday = new Date(`${contributions.from}T00:00:00Z`).getUTCDay();

const days = contributions.counts.map((count, index) => {
	const slot = index + firstWeekday;
	const week = Math.floor(slot / daysPerWeek);
	return { week, x: week * step, y: (slot % daysPerWeek) * step, level: levelOf(count) };
});

const weekCount = days[days.length - 1].week + 1;
const daysByWeek = Object.groupBy(days, (day) => day.week);

export const weeks = Array.from({ length: weekCount }, (_, week) => ({
	week,
	entrance: Math.max(0, week - (weekCount - animatedWeeks)),
	days: daysByWeek[week] ?? []
}));

export const width = weekCount * step - gap;
export const height = daysPerWeek * step - gap;
export const total = contributions.total;
