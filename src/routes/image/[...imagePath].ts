import type { RequestHandler } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import sharp from 'sharp';

export const get: RequestHandler = async ({ params }) => {
	const image = await fs.readFile(`src/images/${params.imagePath}`);

	const data = await sharp(image).jpeg().toBuffer();

	return {
		body: data,
		headers: {
			'Content-Type': 'image/jpeg'
		},
		status: 200
	};
};
