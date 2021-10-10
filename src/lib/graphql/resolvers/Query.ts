import { getCampaign, getCampaigns } from '$lib/services/campaigns';
import { getPlayer, getPlayers } from '$lib/services/player';
import { getNode } from '$lib/services/node';
import type { QueryResolvers } from '../generated/resolvers';

const Query: QueryResolvers = {
	campaigns: async () => {
		const campaigns = await getCampaigns();
		return campaigns.map((campaign) => ({
			...campaign,
			image: { filePath: campaign.image },
			players: campaign.players.map((id) => ({ id }))
		}));
	},
	campaign: async (_, { id }) => {
		const campaignData = await getCampaign(id);
		return {
			...campaignData,
			image: { filePath: campaignData.image },
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
	},
	node: async (_, { id }) => {
		const nodeData = await getNode(id);
		return nodeData;
	}
};

export default Query;
