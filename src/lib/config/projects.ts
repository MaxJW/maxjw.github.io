import { organisations } from './organisation.ts';

export interface ProjectConfig {
	id: string;
	title: string;
	languages: string[];
	organizationKey: keyof typeof organisations;
	link: string;
	featured?: boolean;
	notificationText?: string;
	notificationColor?: string;
}

export const projects: ProjectConfig[] = [
	{
		id: 'socket',
		title: 'Socket Platform',
		languages: ['Svelte', 'TypeScript', 'Ionic', 'Golang', 'Docker'],
		organizationKey: 'adarma',
		link: 'https://adarma.com/socket-soc-platform/',
		featured: true,
		notificationText: 'Featured',
		notificationColor: '#6256a5'
	},
	{
		id: 'monch',
		title: 'Monch - Recipe Manager',
		languages: ['SvelteKit', 'TypeScript', 'TailwindCSS'],
		organizationKey: 'personal',
		link: 'https://monch.cooking/',
		featured: true,
		notificationText: 'Latest',
		notificationColor: '#f8d53a'
	},
	{
		id: 'MRCV',
		title: 'MyRentalCV',
		languages: ['C#.NET', 'ASP.NET Razor', 'HTML', 'CSS', 'JavaScript'],
		organizationKey: 'lettingweb',
		link: 'https://new.myrentalcv.com/Login/Login'
	},
	{
		id: 'wedjeo',
		title: 'Wedding Jeopardy',
		languages: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
		organizationKey: 'personal',
		link: 'https://github.com/MaxJW/WeddingJeopardy'
	},
	{
		id: 'photochallenge',
		title: 'Photo Challenges',
		languages: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
		organizationKey: 'personal',
		link: 'https://github.com/MaxJW/GroomsmaidPhotoChallenge'
	},
	{
		id: 'marvel',
		title: 'Upcoming Marvel Releases',
		languages: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
		organizationKey: 'personal',
		link: 'https://marvel.maxwilson.co.uk/'
	},
	{
		id: 'todo',
		title: '🥕 Carrotodo',
		languages: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
		organizationKey: 'personal',
		link: 'https://todo.maxwilson.co.uk/'
	},
	{
		id: 'ego',
		title: 'Egocentric Video Segmentation',
		languages: ['Python'],
		organizationKey: 'uod',
		link: 'https://github.com/MaxJW/Egocentric-Video-Segmentation'
	},
	{
		id: 'overturned',
		title: 'Overturned',
		languages: ['Unity', 'C#'],
		organizationKey: 'uod',
		link: 'https://github.com/MaxJW/Overturned-Game'
	},
	{
		id: 'craneware',
		title: 'Price Doctor',
		languages: ['Angular', 'JavaScript', 'MongoDB', 'HTML', 'CSS'],
		organizationKey: 'craneware',
		link: 'https://github.com/MaxJW/Craneware-Project'
	},
	{
		id: 'openair',
		title: 'OpenAirBooking',
		languages: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
		organizationKey: 'uod',
		link: 'https://zeno.computing.dundee.ac.uk/2018-ac32006/Team3/index.php'
	},
	{
		id: 'fullstackreactnative',
		title: 'FullStack React Native Book',
		languages: ['React Native'],
		organizationKey: 'book',
		link: 'https://github.com/MaxJW/FullStack-React-Native'
	},
	{
		id: 'maxwilson',
		title: 'Personal Website',
		languages: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
		organizationKey: 'personal',
		link: 'https://github.com/MaxJW/maxjw.github.io'
	},
	{
		id: 'startpage',
		title: 'Browser Start-up Page',
		languages: ['HTML', 'CSS', 'JavaScript'],
		organizationKey: 'personal',
		link: 'https://start.maxwilson.co.uk/'
	},
	{
		id: 'tfthelper',
		title: 'TFT Game Helper',
		languages: ['HTML', 'CSS', 'JavaScript'],
		organizationKey: 'personal',
		link: 'https://maxwilson.co.uk/tfthelper/'
	},
	{
		id: 'mototek',
		title: 'Mototek - Company Website',
		languages: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
		organizationKey: 'personal',
		link: 'https://maxwilson.co.uk/mototek/'
	}
];
