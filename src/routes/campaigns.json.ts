import { CampaignResult, getCampaigns } from '$lib/campaigns';
import type { RequestHandler } from '@sveltejs/kit';

export interface CampaignsResult {
	campaigns: CampaignResult[];
}

export const get: RequestHandler = async () => {
	const campaigns = await getCampaigns();

	const body = JSON.stringify({ campaigns });

	return { body };
};
