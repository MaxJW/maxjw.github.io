import { organisations } from '../config/organisation.ts';
import type { ProjectConfig } from '../config/projects.ts';

export interface ProcessedProject {
	link: string;
	title: string;
	languages: string;
	source: string;
	icon: string;
	image: string;
	image_webp: string;
	notif_text?: string;
	notif_colour?: string;
	featured?: boolean;
}

export function processProject(project: ProjectConfig): ProcessedProject {
	const organization = organisations[project.organizationKey];

	return {
		link: project.link,
		title: project.title,
		languages: project.languages.join(' · '),
		source: organization.name,
		icon: organization.icon,
		image: `/images/repo-images/${project.id}.png`,
		image_webp: `/images/repo-images/${project.id}.webp`,
		notif_text: project.notificationText || '',
		notif_colour: project.notificationColor || '',
		featured: project.featured || false
	};
}

export function getProcessedProjects(projectConfigs: ProjectConfig[]): ProcessedProject[] {
	return projectConfigs.map(processProject);
}
