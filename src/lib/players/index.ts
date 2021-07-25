import { CAMPAIGNS_FILE_DIR } from '$lib/campaigns';
import { promises as fs } from 'fs';
import { join } from 'path';
import markdownToHtml from '../utils/markdown';

export type PlayerData = {
	name: string;
	race: string;
	level: number;
	image: string;
	campaign: string;
};

export interface PlayerResult {
	content: string;
	slug: string;
	data: PlayerData;
}

const getPlayerMD = async (campaignSlug: string, slug: string): Promise<PlayerResult> => {
	const fileContents = await fs.readFile(
		join(CAMPAIGNS_FILE_DIR, campaignSlug, 'players', slug.concat('.md')),
		{
			encoding: 'utf8'
		}
	);

	const { content, data } = await markdownToHtml<PlayerData>(fileContents);

	return {
		content,
		slug: join('/', campaignSlug, 'players', slug),
		data
	};
};

export const getPlayers = async (campaignSlug: string): Promise<PlayerResult[]> => {
	const PLAYERS_FILE_DIR = join(CAMPAIGNS_FILE_DIR, campaignSlug, 'players');

	const playerFiles = await fs.readdir(PLAYERS_FILE_DIR);

	const players = await Promise.all(
		playerFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const slug = fileName.replace(/\.md$/, '');

				return await getPlayerMD(campaignSlug, slug);
			})
	);

	return players;
};

export const getPlayer = async (campaignSlug: string, slug: string): Promise<PlayerResult> => {
	return await getPlayerMD(campaignSlug, slug);
};
