import { base } from '$app/paths';
import { promises as fs } from 'fs';
import { join } from 'path';
import markdownToHtml from '../utils/markdown';

export const CAMPAIGNS_FILE_DIR = 'src/posts/campaigns';

export type CampaignData = {
	name: string;
	font: string;
	image: string;
};

export interface CampaignResult extends CampaignData {
	content: string;
	slug: string;
	excerpt: string;
}

const getCampaignMD = async (slug: string): Promise<CampaignResult> => {
	const fileContents = await fs.readFile(join(CAMPAIGNS_FILE_DIR, slug, 'campaign.md'), {
		encoding: 'utf8'
	});

	const { content, data, excerpt } = await markdownToHtml<CampaignData>(fileContents);

	return {
		...data,
		content,
		slug: join('/', slug),
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

export const getCampaign = async (slug: string): Promise<CampaignResult> => {
	const campaign = await getCampaignMD(slug);

	return campaign;
};
