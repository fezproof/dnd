import getPlayerMD, { PlayerResult } from '$lib/getPlayerMD';
import type { RequestHandler } from '@sveltejs/kit';

export interface PlayerGetResult {
	player: PlayerResult;
}

export const get: RequestHandler<{ slug: string }> = async ({ params }) => {
	const player = await getPlayerMD(params.slug);

	const body = JSON.stringify({ player });

	return { body };
};
