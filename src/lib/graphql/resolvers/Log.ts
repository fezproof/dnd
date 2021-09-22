import { base } from '$app/paths';
import { getLog } from '$lib/campaigns/logs';
import { posix as path } from 'path';
import type { LogResolvers } from '../generated/resolvers';

const Log: LogResolvers = {
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
	},
	image: async ({ id, campaign: { id: campaignId } }, { width, height }) => {
		const imagePath = (await getLog(campaignId, id)).image;

		return imagePath ? path.join('/', base, 'image', `${width}-${height}`, imagePath) : null;
	}
};

export default Log;
