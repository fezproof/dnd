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

<main class="prose max-w-prose mx-auto">
	{@html result.player.content}
</main>
