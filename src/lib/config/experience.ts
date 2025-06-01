export interface Experience {
	title: string;
	company: string;
	companyUrl: string;
	period: string;
	location: string;
	description: string;
	technologies: string[];
}

export const experiences: Experience[] = [
	{
		title: 'Full Stack Developer',
		company: 'Hertility Health',
		companyUrl: 'https://hertilityhealth.com/',
		period: 'Oct 2024 - Present',
		location: 'London Area, United Kingdom · Remote',
		description:
			"Building innovative healthcare technology solutions, focusing on women's health and fertility. Working with modern web technologies to create accessible and user-friendly platforms that make a real impact in healthcare.",
		technologies: ['React', 'TypeScript', 'React Native', 'PostgreSQL', 'Docker', 'AWS', 'Figma']
	},
	{
		title: 'Software Engineer',
		company: 'Adarma Security',
		companyUrl: 'https://adarma.com/',
		period: 'Mar 2021 - Sep 2024',
		location: 'Edinburgh, Scotland, United Kingdom · Hybrid',
		description:
			"Key contributor to the Socket platform, Adarma's flagship SOC platform. Developed the Socket Mission plugin for threat scenario prioritisation and led development of Chronos, a serverless AWS application automating critical IT processes. Managed a team of developers while contributing to migration from Splunk Phantom to in-house solutions.",
		technologies: [
			'Svelte',
			'TypeScript',
			'Golang',
			'Python',
			'PostgreSQL',
			'AWS',
			'Docker',
			'Figma'
		]
	},
	{
		title: 'Software Developer',
		company: 'Let Tech Solutions',
		companyUrl: 'https://www.lettechsolutions.com/',
		period: 'Jun 2020 - Mar 2021',
		location: 'Edinburgh, Scotland, United Kingdom - On Site',
		description:
			'Developed and launched the MyRentalCV platform using ASP.NET to streamline property search for tenants and enhance matching for agents. Integrated Vimeo for property video management and translated Adobe XD designs into responsive web interfaces.',
		technologies: ['C# .NET', 'ASP.NET', 'JavaScript', 'HTML/CSS', 'Adobe XD', 'Vimeo API']
	}
];
