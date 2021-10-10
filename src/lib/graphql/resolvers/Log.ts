import { base } from '$app/paths';
import { getLog } from '$lib/services/campaigns/logs';
import { posix as path } from 'path';
import type { LogResolvers } from '../generated/resolvers';

const Log: LogResolvers = {
	id: ({ id }) => {
		return id;
	},
	content: async ({ id, campaign: { id: campaignId } }) => {
		const { content } = await getLog(campaignId, id);
		return content || null;
	},
	campaign: async ({ campaign }) => {
		return campaign;
	},
	link: ({ id: logId }) => {
		return path.join('/', base, logId);
	},
	name: async ({ id, campaign: { id: campaignId } }) => {
		const { name } = await getLog(campaignId, id);
		return name || null;
	},
	date: async ({ id }) => {
		return id;
	},
	image: async ({ id, campaign: { id: campaignId } }, { width, height }) => {
		const imagePath = (await getLog(campaignId, id)).image;

		return imagePath ? path.join('/', base, 'image', `${width}-${height}`, imagePath) : null;
	}
};

export default Log;
