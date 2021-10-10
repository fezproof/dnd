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
	name: async ({ id }) => {
		const { name } = await getCampaign(id);

		return name;
	},
	font: async ({ id }) => {
		const { font } = await getCampaign(id);

		return font;
	},
	link: ({ id }) => {
		return path.join('/', base, 'campaigns', id);
	},
	image: async ({ id, image }) => {
		if (image) return image;

		const { image: filePath } = await getCampaign(id);

		return { filePath };
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
