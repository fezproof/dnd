import { assets, base } from '$app/paths';
import { getCampaign, getCampaigns } from '$lib/campaigns';
import { getLog, getLogs } from '$lib/campaigns/logs';
import { getPlayer, getPlayers } from '$lib/players';
import { markdownRawToHtml } from '$lib/utils/markdown';
import { GraphQLScalarType } from 'graphql';
import { posix as path } from 'path';
import type { Resolvers } from '../generated/resolvers';

const resolvers: Resolvers = {
	Query: {
		campaigns: async () => {
			const campaigns = await getCampaigns();
			return campaigns.map((campaign) => ({
				...campaign,
				players: campaign.players.map((id) => ({ id }))
			}));
		},
		campaign: async (_, { id }) => {
			const campaignData = await getCampaign(id);
			return {
				...campaignData,
				players: campaignData.players.map((id) => ({ id }))
			};
		},
		log: async (_, { id, campaignId }) => {
			return { id, campaign: { id: campaignId } };
		},
		players: async () => {
			const playersData = await getPlayers();
			return playersData;
		},
		player: async (_, { id }) => {
			const playerData = await getPlayer(id);
			return playerData;
		}
	},
	Campaign: {
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
				.filter(({ draft }) => !draft)
				.map(({ id: logId }) => ({
					id: logId,
					campaign: { id }
				}));
		}
	},

	Log: {
		id: ({ id }) => {
			return id;
		},
		campaign: ({ campaign: { id } }) => {
			return { id };
		},
		link: ({ id: logId, campaign: { id: campaignId } }) => {
			return path.join('/', base, campaignId, 'logs', logId);
		},
		name: async ({ id, campaign: { id: campaignId } }) => {
			const { name } = await getLog(campaignId, id);
			return name;
		},
		date: async ({ id }) => {
			return id;
		},
		content: async ({ id, campaign: { id: campaignId } }) => {
			const { content, excerpt } = await getLog(campaignId, id);
			return { excerpt, prose: content, raw: content };
		}
	},

	Player: {
		id: ({ id }) => {
			return id;
		},
		link: ({ id }) => {
			return path.join('/', base, 'players', id);
		},
		image: async ({ id, image }, { width, height }) => {
			const imagePath = image ?? (await getCampaign(id)).image;

			return path.join('/', base, 'image', `${width}-${height}`, imagePath);
		}
	},

	Prose: new GraphQLScalarType({
		name: 'Prose',
		description: 'Parsed html prose',
		// parseValue: async () => {
		//   return ''
		// },
		serialize: async (value) => {
			return markdownRawToHtml(value);
		}
	})
};

export default resolvers;
