export interface Role {
	company: string;
	url: string;
	title: string;
	period: string;
	location: string;
	note?: string;
	summary: string;
	summaryLink?: { text: string; url: string };
	highlights: string[];
	stack: string[];
}

export interface Project {
	id: 'monch' | 'fantasysteam' | 'paintnotnet' | 'invites';
	name: string;
	url: string;
	linkText: string;
	summary: string;
	detail?: string;
	stack: string[];
	alt: string;
	color: string;
}

export interface SmallProject {
	year: number;
	name: string;
	url: string;
	summary: string;
	stack: string;
}

export const email = 'me@maxwilson.co.uk';

export const intro =
	"I have spent six years building software that people rely on. At Adarma that meant security tools, for customers to understand their risk and for analysts to act on threats. At Hertility it's healthcare: the apps patients use to manage their care, and the systems clinicians use behind the scenes. What I enjoy most is taking a feature from the pure datamodel all the way to the designing of how we present that information. Lately I've been doing that on my own projects, from Monch, a paid meal planning app, to tools for the Linux desktop.";

export const mainStack = [
	'TypeScript',
	'React',
	'Svelte',
	'Next.js',
	'GraphQL',
	'Postgres',
	'AWS',
	'Terraform',
	'Cloudflare'
];

export const careerStart = new Date('2020-06-01');

export const roles: Role[] = [
	{
		company: 'Hertility Health',
		url: 'https://hertilityhealth.com/',
		title: 'Full stack developer',
		period: 'Oct 2024 – now',
		location: 'London · Remote',
		summary:
			'Reproductive health care, built across web, iOS and Android, from the patient apps to the clinic tools.',
		highlights: [
			'Led the move of a core patient data domain into a new service: designed the data model, migrated the full history, and proved old and new matched before switching over',
			"Created the company's shared React component library, from design tokens to visual regression tests and releases",
			'Built a partner referral service from scratch on AWS serverless, with signed requests and guaranteed delivery',
			'Co-built the backend for the redesigned results report',
			'Built the AI agent tools the team uses to investigate tickets and write pull requests'
		],
		stack: [
			'TypeScript',
			'React',
			'Next.js',
			'React Native',
			'GraphQL',
			'Node',
			'Postgres',
			'AWS',
			'Terraform',
			'Shopify'
		]
	},
	{
		company: 'Adarma Security',
		url: 'https://adarma.com/',
		title: 'Software engineer',
		period: 'Mar 2021 – Sep 2024',
		location: 'Edinburgh · hybrid',
		note: 'IT intern here in summer 2019',
		summary:
			"Socket, Adarma's security operations platform: Svelte and TypeScript on the front, Go and PostgreSQL behind.",
		highlights: [
			'Built Socket Mission, which lets organisations prioritise threat scenarios, check their coverage and adapt their defences',
			'Sole developer of Chronos, a serverless AWS app (Step Functions, Lambda, Python) automating joiner, mover and leaver workflows across Freshdesk, Azure AD, Jamf and AWS audit reports',
			'Led a team of developers through delivery',
			'Helped move off Splunk Phantom onto in-house tooling'
		],
		stack: ['Svelte', 'TypeScript', 'Go', 'Python', 'PostgreSQL', 'AWS']
	},
	{
		company: 'Let Tech Solutions',
		url: 'https://www.lettechsolutions.com/',
		title: 'Software developer',
		period: 'Jun 2020 – Mar 2021',
		location: 'Edinburgh',
		summary: 'Built and launched MyRentalCV, matching tenants with letting agents.',
		summaryLink: { text: 'MyRentalCV', url: 'https://www.myrentalcv.com/' },
		highlights: [
			"Responsive interfaces built from the UX team's Adobe XD designs",
			'Vimeo integration for property video tours',
			'Improvements to existing products, including River LPM'
		],
		stack: ['C#', 'ASP.NET', 'JavaScript']
	}
];

export const education = {
	school: 'University of Dundee',
	degree: 'BSc Computer Science, 2:1',
	period: '2016 – 2020'
};

export const projects: Project[] = [
	{
		id: 'monch',
		name: 'Monch',
		url: 'https://monch.cooking/',
		linkText: 'monch.cooking',
		summary:
			"Plans the week's dinners from your own recipes, with one shopping list for the house.",
		detail:
			'Households share recipes and a weekly plan, with Stripe subscriptions behind the paid tier.',
		stack: ['SvelteKit', 'Cloudflare Workers', 'D1', 'Stripe'],
		alt: "Monch's landing page: Mondays are quick, Thursdays are bolognese",
		color: '#d35b12'
	},
	{
		id: 'fantasysteam',
		name: 'Fantasy Steam',
		url: 'https://fantasysteam.com/',
		linkText: 'fantasysteam.com',
		summary:
			'A fantasy league for unreleased Steam games. Draft before launch, score on real player numbers and reviews.',
		stack: ['SvelteKit', 'Firebase', 'Cloudflare'],
		alt: "Fantasy Steam's landing page: Draft. Predict. Win.",
		color: '#e8b808'
	},
	{
		id: 'invites',
		name: 'Invites',
		url: 'https://invites.maxwilson.co.uk/',
		linkText: 'invites.maxwilson.co.uk',
		summary: 'One link in the group chat. Guests tap their own name to RSVP, no account needed.',
		detail: "Its Halloween photobooth posts each photo strip straight into the event's gallery.",
		stack: ['React Router', 'Cloudflare Workers', 'D1', 'R2'],
		alt: "Invites' landing page",
		color: '#0878b8'
	},
	{
		id: 'paintnotnet',
		name: 'paintnotnet',
		url: 'https://github.com/MaxJW/paintnotnet',
		linkText: 'github.com/MaxJW/paintnotnet',
		summary: 'A modern paint.net for Linux, with layers, adjustments and effects drawn on the GPU.',
		stack: ['Rust', 'egui', 'wgpu', 'WGSL'],
		alt: "paintnotnet's main window with a dusk landscape open",
		color: '#a07ad6'
	}
];

export const alsoBuilt: SmallProject[] = [
	{
		year: 2026,
		name: 'Harbour',
		url: 'https://github.com/MaxJW/harbour',
		summary: 'A macOS-style dock for KDE Plasma 6, with magnification and Genie minimise',
		stack: 'C++ · QML'
	},
	{
		year: 2026,
		name: 'justchords',
		url: 'https://github.com/MaxJW/justchords',
		summary: 'Self-hosted chord sheets with support for transposing, works offline',
		stack: 'React · Hono · SQLite'
	},
	{
		year: 2026,
		name: 'drip',
		url: 'https://github.com/MaxJW/drip',
		summary: 'A tailscale utility: drag a file onto a device to send it across your tailnet',
		stack: 'C++ · QML'
	},
	{
		year: 2026,
		name: 'emojipop',
		url: 'https://github.com/MaxJW/emojipop',
		summary: 'Fast emoji picker for Plasma on Wayland',
		stack: 'C++ · QML'
	},
	{
		year: 2019,
		name: 'MMM',
		url: 'https://github.com/MaxJW/MMM',
		summary: 'A magic mirror-style dashboard that runs on a Raspberry Pi 1',
		stack: 'SvelteKit'
	}
];

export const links = [
	{ label: 'Email', href: `mailto:${email}`, icon: 'mail', hero: true },
	{ label: 'GitHub', href: 'https://github.com/MaxJW', icon: 'github', hero: true },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/maxjwilson-1', icon: 'linkedin', hero: true },
	{
		label: 'Bluesky',
		href: 'https://bsky.app/profile/maxwilson.co.uk',
		icon: 'bluesky',
		hero: true
	},
	{
		label: 'Instagram',
		href: 'https://instagram.com/maxjwilson_/',
		icon: 'instagram',
		hero: false
	},
	{ label: 'YouTube', href: 'https://youtube.com/@MaxJW_', icon: 'youtube', hero: false }
] as const;
