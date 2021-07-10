import getCampaignMD, { CampaignResult } from '$lib/getCampaignMD';
import getPlayerMD, { PlayerResult } from '$lib/getPlayerMD';
import type { RequestHandler } from '@sveltejs/kit';
import { promises as fs } from 'fs';

const playersFileDir = 'src/posts/players';

const getPlayers = async (base: string) => {
	const playerFiles = await fs.readdir(playersFileDir);

	const players = await Promise.all(
		playerFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const slug = fileName.replace(/\.md$/, '');

				return await getPlayerMD(slug, base);
			})
	);

	return players;
};

export interface IndexGetResult {
	players: PlayerResult[];
	campaign: CampaignResult;
}

export const get: RequestHandler = async ({ params }) => {
	const players = await getPlayers(`/${params.campaign}`);
	const campaign = await getCampaignMD(params.campaign);

	const body = JSON.stringify({ players, campaign });

	return { body };
};
