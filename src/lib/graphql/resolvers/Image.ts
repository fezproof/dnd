import { base } from '$app/paths';
import type { ImageResolvers } from '../generated/resolvers';
import { posix as path } from 'path';

const Image: ImageResolvers = {
	filePath: async ({ filePath }) => {
		return filePath;
	},
	src: async ({ filePath }) => {
		return path.join('/', base, 'image', filePath);
	}
};

export default Image;
