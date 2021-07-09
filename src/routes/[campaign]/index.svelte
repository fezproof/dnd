<script context="module" lang="ts">
	import { assets, base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, page }) => {
		const campaign = page.params.campaign;

		const result = await fetch(`${base}/${campaign}.json`).then((r) => r.json());

		return {
			props: { result }
		};
	};
</script>

<script lang="ts">
	import type { IndexGetResult } from './index.json';

	export let result: IndexGetResult;
</script>

<div class="fixed inset-0 z-[-1] h-full w-full">
	<img src={`${base}/eos-rising.jpg`} alt="eos rising hero" class="h-full w-full object-cover" />
</div>

<div class="h-72 flex items-center justify-center">
	<h1 class="text-5xl font-semibold">Eos Rising</h1>
</div>

<div class="mx-auto max-w-prose">
	<h2 class="text-2xl mb-6 font-semibold">Players</h2>
	<div class="grid gap-4 grid-flow-col items-start justify-center">
		{#each result.players as player}
			<a href={player.slug}>
				<div
					class="relative bg-gray-200/30 backdrop-blur-md hover:bg-gray-200/50 flex flex-col rounded-md h-64 w-52 transition-all"
				>
					<div class="flex-grow flex items-center justify-center">
						<img
							class="w-40 h-40 rounded-full object-cover"
							src={`${base}${player.data.image}`}
							alt={`${player.data.name} image`}
						/>
					</div>
					<div class="my-2 mx-4">
						<h3 class="text-2xl">{player.data.name}</h3>
						<h4>{player.data.race}</h4>
						<h5
							class="absolute top-0 right-0 w-8 h-8 rounded-tr-md rounded-bl-md flex items-center justify-center bg-gray-200/30"
						>
							{player.data.level}
						</h5>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
