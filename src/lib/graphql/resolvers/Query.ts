import { getCampaign, getCampaigns } from '$lib/services/campaigns';
import { getPlayer, getPlayers } from '$lib/services/player';
import { getNode } from '$lib/services/node';
import type { QueryResolvers } from '../generated/resolvers';
import { getLogWithSlug } from '$lib/services/campaigns/logs';

const Query: QueryResolvers = {
	campaigns: async () => {
		const campaigns = await getCampaigns();
		return campaigns;
	},
	campaign: async (_, { id }) => {
		const campaignData = await getCampaign(id);

		return campaignData;
	},
	log: async (_, { id: slug, campaignId }) => {
		const campaign = await getCampaign(campaignId);
		const { id } = await getLogWithSlug(campaignId, slug);
		return { id, campaign };
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
