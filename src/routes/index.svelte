<script context="module" lang="ts">
	import { base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const result = await fetch(`${base}/index.json`).then((r) => r.json());
		return {
			props: { result }
		};
	};
</script>

<script lang="ts">
	import type { IndexGetResult } from './index.json';

	export let result: IndexGetResult;
</script>

<h1>Eos Rising</h1>

<div class="my-2">
	{#each result.players as player}
		<a href={player.slug} class="underline">{player.data.name}</a>
	{/each}
</div>
