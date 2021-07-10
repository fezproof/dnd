import type { RequestHandler } from '@sveltejs/kit';

export interface CampaignData {
	image: string;
	link: string;
	title: string;
	font: string;
}

export interface CampaignResult {
	campaigns: CampaignData[];
}

export const get: RequestHandler = async () => {
	const campaigns: CampaignData[] = [
		{ image: '/eos-rising.jpg', link: '/eos-rising', title: 'Eos Rising', font: 'font-eos' },
		{
			image: '/hunters-arcane.jpg',
			link: '/hunters-arcane',
			title: 'Hunters of the Arcane',
			font: 'font-hunters'
		},
		{
			image: '/unfortunate.jpg',
			link: '/unfortuante',
			title: 'A series of Unfortunate Events',
			font: 'font-unfortunate'
		}
	];

	const body = JSON.stringify({ campaigns });

	return { body };
};
