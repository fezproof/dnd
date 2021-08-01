import { base, assets } from '$app/paths';
import { getCampaign, getCampaigns } from '$lib/campaigns';
import type { Resolvers } from '../generated/resolvers';
import { posix as path } from 'path';
import { getPlayer, getPlayers } from '$lib/players';

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
		}
	},
	Player: {
		id: ({ id }) => {
			return id;
		},
		link: ({ id }) => {
			return path.join('/', base, 'players', id);
		},
		image: async ({ id, image }) => {
			if (image) return path.join(assets, image);

			const { image: imagePath } = await getCampaign(id);

			return path.join(assets, imagePath);
		}
	}
};

export default resolvers;
