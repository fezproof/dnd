import getPlayerMD, { PlayerResult } from '$lib/getPlayerMD';
import type { RequestHandler } from '@sveltejs/kit';
import { promises as fs } from 'fs';

const playersFileDir = 'src/posts/players';

const getPlayers = async () => {
	const playerFiles = await fs.readdir(playersFileDir);

	const players = await Promise.all(
		playerFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const slug = fileName.replace(/\.md$/, '');

				return await getPlayerMD(slug);
			})
	);

	return players;
};

export interface IndexGetResult {
	players: PlayerResult[];
}

export const get: RequestHandler = async () => {
	const players = await getPlayers();

	const body = JSON.stringify({ players });

	return { body };
};
