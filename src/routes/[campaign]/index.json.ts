import { CampaignResult, getCampaign } from '$lib/campaigns';
import { getPlayers, PlayerResult } from '$lib/players';
import type { RequestHandler } from '@sveltejs/kit';

export interface IndexGetResult {
	players: PlayerResult[];
	campaign: CampaignResult;
}

export const get: RequestHandler = async ({ params }) => {
	const campaign = await getCampaign(params.campaign);
	const players = await getPlayers(campaign.slug);

	const body = JSON.stringify({ players, campaign });

	return { body };
};
