import { getMarkdownInfo } from '$lib/utils/markdown';
import { promises as fs } from 'fs';
import { join } from 'path';

export const CAMPAIGNS_FILE_DIR = 'src/posts/campaigns';

export type CampaignData = {
	name: string;
	font: string;
	image: string;
	players: string[];
};

export interface CampaignResult extends CampaignData {
	content: string;
	id: string;
	excerpt: string;
}

const getCampaignMD = async (id: string): Promise<CampaignResult> => {
	const fileContents = await fs.readFile(join(CAMPAIGNS_FILE_DIR, id, `${id}.md`), {
		encoding: 'utf8'
	});

	const { content, data, excerpt } = getMarkdownInfo<CampaignData>(fileContents);

	return {
		...data,
		content,
		id,
		excerpt
	};
};

export const getCampaigns = async (): Promise<CampaignResult[]> => {
	const campaignFiles = await fs.readdir(CAMPAIGNS_FILE_DIR, { withFileTypes: true });

	const campaignDirs = campaignFiles
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	const campaigns = await Promise.all(
		campaignDirs.map(async (dirName) => await getCampaignMD(dirName))
	);

	return campaigns;
};

export const getCampaign = async (id: string): Promise<CampaignResult> => {
	const campaign = await getCampaignMD(id);

	return campaign;
};
