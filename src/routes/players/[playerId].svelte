<script context="module" lang="ts">
	import { base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({
		fetch,
		page: {
			params: { playerId }
		}
	}) => fetch(`${base}/players/${playerId}.json`).then((r) => r.json());
</script>

<script lang="ts">
	export let player: any;
</script>

<header class="px-4 max-w-prose mx-auto">
	<h2 class="mt-40 text-white text-3xl ">{player.name}</h2>
</header>
<main class="prose px-4 max-w-prose mx-auto text-gray-100 my-8">
	{@html player.content}
</main>
