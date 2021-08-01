import { base } from '$app/paths';
import type { Load } from '@sveltejs/kit';

export const loadData: Load = async ({ fetch, page: { path } }) => {
	const response = await fetch(`${base}${path}.json`);
	return response.json();
};
