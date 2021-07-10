<script context="module" lang="ts">
	import { base } from '$app/paths';
	import ShardsContainer from '$lib/components/Shards/ShardsContainer.svelte';
	import classes from '$lib/styles/button.module.css';
	import type { Load } from '@sveltejs/kit';
	import type { IndexGetResult } from './index.json';

	export const load: Load = async ({ fetch, page }) => {
		const campaign = page.params.campaign;

		const result = await fetch(`${base}/${campaign}.json`).then((r) => r.json());

		return {
			props: { result }
		};
	};
</script>

<script lang="ts">
	import ShardItem from '$lib/components/Shards/ShardItem.svelte';

	export let result: IndexGetResult;

	const { players } = result;
</script>

<div class="absolute top-0 left-0 right-0 z-[-1] h-full w-full">
	<img
		src={`${base}/eos-rising.jpg`}
		alt="eos rising hero"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div
		class="bg-gradient-to-b from-transparent via-green-main/40 to-green-main h-full w-full absolute inset-0"
	/>
</div>

<div class="min-h-screen flex flex-col items-center justify-center">
	<h2
		class="mt-40 text-4xl md:text-6xl lg:text-7xl font-semibold border-b-8 border-orange-main font-eos mb-8"
	>
		Eos Rising
	</h2>
	<p class="max-w-prose px-6 mb-6 font-serif text-2xl">
		Tua amin! khila amin elen sila lumenn omentilmo Tulien. Faina templa lle naa vanima Nadorhuanrim
		ed' i'ear ar' elenea!. Amin feuya ten' lle manke naa i'omentien Saurarea amin irma fion laure
		sereg. Ai' atar Ithil'quessir lle naa belegohtar asca melloneamin. Avarierea mellon en
		mellonamin n'ndengina ta ho mereth en draugrim.
	</p>
	<a href="#" class={classes['primary-button']}> Read more </a>
</div>

<main>
	<section class="h-screen py-12 flex flex-col">
		<h3 class="section-heading">The Misfits</h3>
		<div class="flex-1 flex w-full items-stretch justify-center px-8">
			<ShardsContainer>
				{#each players as player (player.slug)}
					<ShardItem font="font-eos" image={player.data.image} link="#" title={player.data.name} />
				{/each}
			</ShardsContainer>
		</div>
	</section>

	<section class="h-96 mx-auto max-w-prose text-center py-12">
		<h3 class="section-heading">The World</h3>
	</section>

	<section class="h-96 mx-auto max-w-prose text-center py-12">
		<h3 class="section-heading">Mission Logs</h3>
	</section>
</main>

<style lang="postcss">
	.section-heading {
		@apply text-4xl inline-block mx-auto mb-8 font-semibold font-eos border-b-8 border-orange-main;
	}
</style>
