import { base } from '$app/paths';
import { getCampaign } from '$lib/services/campaigns';
import { posix as path } from 'path';
import type { PlayerResolvers } from '../generated/resolvers';

const Player: PlayerResolvers = {
	id: ({ id }) => {
		return id;
	},
	link: ({ id }) => {
		return path.join('/', base, id);
	},
	image: async ({ id, image }, { width, height }) => {
		const imagePath = image ?? (await getCampaign(id)).image;

		return path.join('/', base, 'image', `${width}-${height}`, imagePath);
	}
};

export default Player;
