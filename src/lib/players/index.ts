import { CAMPAIGNS_FILE_DIR } from '$lib/campaigns';
import { promises as fs } from 'fs';
import { join } from 'path';
import markdownToHtml from '../utils/markdown';

export const PLAYERS_FILE_DIR = 'src/posts/players';

export type PlayerData = {
	name: string;
	race: string;
	level: number;
	image: string;
	campaign: string;
};

export interface PlayerResult extends PlayerData {
	content: string;
	id: string;
	excerpt: string;
}

const getPlayerMD = async (id: string): Promise<PlayerResult> => {
	const fileContents = await fs.readFile(join(PLAYERS_FILE_DIR, id.concat('.md')), {
		encoding: 'utf8'
	});

	const { content, data, excerpt } = await markdownToHtml<PlayerData>(fileContents);

	return {
		content,
		id,
		excerpt,
		...data
	};
};

export const getPlayers = async (): Promise<PlayerResult[]> => {
	const playerFiles = await fs.readdir(PLAYERS_FILE_DIR);

	const players = await Promise.all(
		playerFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const id = fileName.replace(/\.md$/, '');

				return await getPlayerMD(id);
			})
	);

	return players;
};

export const getPlayer = async (id: string): Promise<PlayerResult> => {
	return await getPlayerMD(id);
};
