import { base, assets } from '$app/paths';
import { getCampaign, getCampaigns } from '$lib/campaigns';
import type { Resolvers } from '../generated/resolvers';
import { posix as path } from 'path';

const resolvers: Resolvers = {
	Query: {
		campaigns: async () => {
			const campaigns = await getCampaigns();
			return campaigns;
		},
		campaign: async (_, { slug }) => {
			const campaignData = await getCampaign(slug);
			return {
				...campaignData
			};
		}
	},
	Campaign: {
		slug: ({ slug }) => {
			return slug;
		},
		link: ({ slug }) => {
			return path.join(base, slug);
		},
		image: async ({ slug, image }) => {
			if (image) return path.join(assets, image);

			const { image: imagePath } = await getCampaign(slug);

			return path.join(assets, imagePath);
		}
	}
};

export default resolvers;
