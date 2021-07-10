import getCampaignMD, { CampaignResult, CAMPAIGNS_FILE_DIR } from '$lib/getCampaignMD';
import type { RequestHandler } from '@sveltejs/kit';
import { promises as fs } from 'fs';

export interface CampaignsResult {
	campaigns: CampaignResult[];
}

const getCampaigns = async () => {
	const campaignFiles = await fs.readdir(CAMPAIGNS_FILE_DIR);

	const campaigns = await Promise.all(
		campaignFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const slug = fileName.replace(/\.md$/, '');

				return await getCampaignMD(slug);
			})
	);

	return campaigns;
};

export const get: RequestHandler = async () => {
	const campaigns = await getCampaigns();

	const body = JSON.stringify({ campaigns });

	return { body };
};
