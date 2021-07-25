import { getPlayer, PlayerResult } from '$lib/players';
import type { RequestHandler } from '@sveltejs/kit';

export interface PlayerGetResult {
	player: PlayerResult;
}

export const get: RequestHandler<{ slug: string }> = async ({ params }) => {
	const player = await getPlayer(params.campaign, params.slug);

	const body = JSON.stringify({ player });

	return { body };
};
