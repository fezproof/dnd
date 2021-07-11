import { promises as fs } from 'fs';
import { join } from 'path';
import markdownToHtml from './markdown';

const PLAYERS_FILE_DIR = 'src/posts/players';

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

const getPlayerMD = async (slug: string, basePath = '/'): Promise<PlayerResult> => {
	const fileContents = await fs.readFile(join(PLAYERS_FILE_DIR, slug.concat('.md')), {
		encoding: 'utf8'
	});

	const { content, data } = await markdownToHtml<PlayerData>(fileContents);

	return {
		content,
		slug: join(basePath, 'players', slug),
		data
	};
};

export default getPlayerMD;
