import { dev } from '$app/env';
import { base } from '$app/paths';
import { getCampaign } from '$lib/services/campaigns';
import { getLogs } from '$lib/services/campaigns/logs';
import { getPlayer } from '$lib/services/player';
import { posix as path } from 'path';
import type { CampaignResolvers } from '../generated/resolvers';

const Campaign: CampaignResolvers = {
	id: ({ id }) => {
		return id;
	},
	link: ({ id }) => {
		return path.join('/', base, id);
	},
	image: async ({ image }) => {
		return { filePath: image };
	},
	players: async ({ players }) => {
		const playerResults = players.map((id) => {
			return getPlayer(id);
		});
		return playerResults;
	},
	logs: async (campaign) => {
		const logResults = await getLogs(campaign.id);

		return logResults
			.filter(({ draft }) => dev || !draft)
			.map(({ id: logId }) => ({
				id: logId,
				campaign
			}));
	}
};

export default Campaign;
