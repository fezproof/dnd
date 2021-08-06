<script context="module" lang="ts">
	import ShardItem from '$lib/components/Shards/ShardItem.svelte';
	import ShardsContainer from '$lib/components/Shards/ShardsContainer.svelte';
	import type { GetCampaignQuery } from '$lib/graphql/generated/operations';
	import classes from '$lib/styles/button.module.css';
	import { loadData } from '$lib/utils/queryLoader';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = loadData;
</script>

<script lang="ts">
	export let campaign: GetCampaignQuery['campaign'] | undefined;
</script>

<svelte:head>
	<title>Scroll'd: {campaign?.name}</title>
	<meta name="description" content={campaign?.excerpt} />
</svelte:head>

<div class={campaign?.font}>
	<header>
		<div class="absolute top-0 left-0 right-0 z-[-1] h-full w-full">
			<img
				src={campaign?.image}
				alt={`${campaign?.name} hero`}
				class="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
			/>
			<div
				class="bg-gradient-to-b from-transparent via-black/40 to-black h-full w-full absolute top-0 right-0 bottom-0 left-0"
			/>
		</div>

		<div class="min-h-screen flex flex-col items-center justify-center">
			<h2
				class="mt-40 text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold border-b-8 border-orange-main pb-4 mb-8"
			>
				{campaign?.name}
			</h2>
			<p class="max-w-prose mb-6 font-sans prose text-white">
				{@html campaign?.excerpt}
			</p>
			<a href={`${campaign?.link}/info`} class={classes['primary-button']}>Read more</a>
		</div>
	</header>

	<main>
		<section class="section flex flex-col">
			<h3 class="section-heading">The Misfits</h3>
			{#if campaign?.players?.length}
				<div
					class="flex-1 h-full flex w-full items-stretch justify-center px-8 mx-auto max-w-screen-xl"
				>
					<ShardsContainer>
						{#each campaign?.players as player (player.id)}
							<ShardItem
								font={campaign?.font}
								image={player.image}
								link={player.link}
								title={player.name}
							/>
						{/each}
					</ShardsContainer>
				</div>
			{:else}
				<p class="italic text-lg font-serif max-w-prose mx-auto">Coming soon...</p>
			{/if}
		</section>

		<section class="section">
			<h3 class="section-heading">The World</h3>
			<p class="italic text-lg font-serif max-w-prose mx-auto">Coming soon...</p>
		</section>

		<section class="section">
			<h3 class="section-heading">Mission Logs</h3>

			{#if campaign?.logs?.length}
				{#each campaign?.logs as log (log.id)}
					<p class="italic text-lg font-serif max-w-prose mx-auto">{log.name}</p>
				{/each}
			{:else}
				<p class="italic text-lg font-serif max-w-prose mx-auto">Coming soon...</p>
			{/if}
		</section>
	</main>
</div>

<style lang="postcss">
	.section {
		@apply min-h-screen mx-auto text-center py-12;
	}

	.section-heading {
		@apply text-6xl inline-block mx-auto mb-8 font-semibold border-b-8 border-orange-main pb-2;
	}
</style>
