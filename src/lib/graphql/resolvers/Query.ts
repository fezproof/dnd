import { getCampaign, getCampaigns } from '$lib/campaigns';
import { getPlayer, getPlayers } from '$lib/players';
import type { QueryResolvers } from '../generated/resolvers';

const Query: QueryResolvers = {
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
			players: campaignData.players.map((id) => ({ id: id.replace('players/', '') }))
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
};

export default Query;
