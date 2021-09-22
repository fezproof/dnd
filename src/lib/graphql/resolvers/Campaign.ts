import { dev } from '$app/env';
import { assets, base } from '$app/paths';
import { getCampaign } from '$lib/campaigns';
import { getLogs } from '$lib/campaigns/logs';
import { getPlayer } from '$lib/players';
import { posix as path } from 'path';
import type { CampaignResolvers } from '../generated/resolvers';

const Campaign: CampaignResolvers = {
	id: ({ id }) => {
		return id;
	},
	link: ({ id }) => {
		return path.join('/', base, id);
	},
	image: async ({ id, image }) => {
		if (image) return path.join(assets, image);

		const { image: imagePath } = await getCampaign(id);

		return path.join(assets, imagePath);
	},
	players: async ({ players }) => {
		if (players?.length) {
			const playerPromises = players.map(async ({ id }) => {
				return getPlayer(id);
			});
			return Promise.all(playerPromises);
		}
		return null;
	},
	logs: async ({ id }) => {
		const logResults = await getLogs(id);

		return logResults
			.filter(({ draft }) => dev || !draft)
			.map(({ id: logId }) => ({
				id: logId,
				campaign: { id }
			}));
	}
};

export default Campaign;
