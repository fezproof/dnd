import { promises as fs } from 'fs';
import { join } from 'path';
import markdownToHtml from './markdown';

export const CAMPAIGNS_FILE_DIR = 'src/posts/campaigns';

export type CampaignData = {
	name: string;
	font: string;
	image: string;
};

export interface CampaignResult {
	content: string;
	slug: string;
	data: CampaignData;
	excerpt: string;
}

const getCampaignMD = async (slug: string, basePath = '/'): Promise<CampaignResult> => {
	const fileContents = await fs.readFile(join(CAMPAIGNS_FILE_DIR, slug.concat('.md')), {
		encoding: 'utf8'
	});

	const { content, data, excerpt } = await markdownToHtml<CampaignData>(fileContents);

	return {
		content,
		slug: join(basePath, slug),
		data,
		excerpt
	};
};

export default getCampaignMD;
