import { assets, base } from '$app/paths';
import { getCampaign, getCampaigns } from '$lib/campaigns';
import { getLogs } from '$lib/campaigns/logs';
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
				.map(({ id, content, excerpt, name }) => ({
					id,
					date: id,
					name,
					content: {
						excerpt,
						prose: content,
						raw: content
					}
				}));
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
