import type { Player } from '$lib/graphql/generated/resolvers';
import { getNode } from '$lib/services/node';
import { POST_FILE_DIR } from '$lib/utils/markdown';
import { promises as fs } from 'fs';
import { posix as path } from 'path';

export const PLAYER_ID_PREFIX = 'players';
export const PLAYERS_FILE_DIR = path.join(POST_FILE_DIR, PLAYER_ID_PREFIX);

export type PlayerData = {
	name: string;
	race: string;
	level: number;
	image: string;
	campaign: string;
};

const getPlayerMD = async (id: string): Promise<Player> => {
	return getNode<PlayerData>(id);
};

export const getPlayers = async (): Promise<Player[]> => {
	const playerFiles = await fs.readdir(PLAYERS_FILE_DIR);

	const players = await Promise.all(
		playerFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const id = `${PLAYER_ID_PREFIX}/${fileName.replace(/\.md$/, '')}`;

				return await getPlayer(id);
			})
	);

	return players;
};

export const getPlayer = async (id: string): Promise<Player> => {
	return await getPlayerMD(id);
};
