import markdownToHtml from '$lib/utils/markdown';
import type { RequestHandler } from '@sveltejs/kit';
import { promises as fs } from 'fs';

export const get: RequestHandler = async ({ params }) => {
	console.log(params);
	const markdownFile = await fs.readFile(
		`src/posts/campaigns/${params.campaign}/${params.datapath.replace('.json', '.md')}`,
		{ encoding: 'utf-8' }
	);

	const result = await markdownToHtml<null>(markdownFile);

	console.log(result);

	return {
		body: { result },
		headers: {
			'Content-Type': 'application/json'
		},
		status: 200
	};
};
