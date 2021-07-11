<script context="module" lang="ts">
	import { base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, page }) => {
		const slug = page.params.slug;
		const campaign = page.params.campaign;
		const result = await fetch(`${base}/${campaign}/players/${slug}.json`).then((r) => r.json());
		return {
			props: { result }
		};
	};
</script>

<script lang="ts">
	import type { PlayerGetResult } from './[slug].json';

	export let result: PlayerGetResult;
</script>

<header class="px-4 max-w-prose mx-auto">
	<h2 class="mt-40 text-white text-3xl ">{result.player.data.name}</h2>
</header>
<main class="prose px-4 max-w-prose mx-auto text-gray-100 my-8">
	{@html result.player.content}
</main>
