export interface Organization {
	name: string;
	icon: string;
}

export const organisations: Record<string, Organization> = {
	adarma: {
		name: 'Adarma',
		icon: '/images/icon-images/adarma.png'
	},
	personal: {
		name: 'Website',
		icon: '/images/icon-images/personal.png'
	},
	uod: {
		name: 'University of Dundee',
		icon: '/images/icon-images/UoD.png'
	},
	lettingweb: {
		name: 'LettingWeb',
		icon: '/images/icon-images/LT.png'
	},
	craneware: {
		name: 'Craneware',
		icon: '/images/icon-images/CW.png'
	},
	book: {
		name: 'Book',
		icon: '/images/icon-images/personal.png'
	}
};
