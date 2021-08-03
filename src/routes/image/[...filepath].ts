import type { RequestHandler } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import sharp from 'sharp';

export const get: RequestHandler = async ({ query, params }) => {
	const width = parseInt(query.get('width'));
	const height = parseInt(query.get('height'));

	const image = await fs.readFile(`src/images/${params.filepath}`);

	const data = await sharp(image)
		.resize({ width: width || undefined, height: height || undefined })
		.jpeg()
		.toBuffer();

	return {
		body: data,
		headers: {
			'Content-Type': 'image/jpeg'
		},
		status: 200
	};
};
