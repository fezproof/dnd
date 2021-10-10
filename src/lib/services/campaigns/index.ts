import type { Campaign } from '$lib/graphql/generated/resolvers';
import { POST_FILE_DIR } from '$lib/utils/markdown';
import { promises as fs } from 'fs';
import { posix as path } from 'path';
import { getNode } from '../node';

export const CAMPAIGN_ID_PREFIX = 'campaigns';
export const CAMPAIGNS_FILE_DIR = path.join(POST_FILE_DIR, CAMPAIGN_ID_PREFIX);

export type CampaignData = {
	name: string;
	font: string;
	image: string;
	players: string[];
};

export type CampaignResult = Omit<Campaign, 'image' | 'players'> & CampaignData;

const getCampaignMD = async (id: string): Promise<CampaignResult> => {
	const indexId = `${id}/${id.substring(CAMPAIGN_ID_PREFIX.length + 1)}`;

	const campaignData = await getNode<CampaignData>(indexId);

	return { ...campaignData, id };
};

export const getCampaigns = async (): Promise<CampaignResult[]> => {
	const campaignFiles = await fs.readdir(CAMPAIGNS_FILE_DIR, { withFileTypes: true });

	const campaignDirs = campaignFiles
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	const campaigns = await Promise.all(
		campaignDirs.map(async (dirName) => await getCampaignMD(`${CAMPAIGN_ID_PREFIX}/${dirName}`))
	);

	return campaigns;
};

export const getCampaign = async (id: string): Promise<CampaignResult> => {
	const campaign = await getCampaignMD(id);

	return campaign;
};
