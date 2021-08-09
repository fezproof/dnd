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

<div class="fixed top-0 left-0 right-0 bottom-0 z-[-1] h-full w-full">
	<img
		src={campaign?.image}
		alt={`${campaign?.name} hero`}
		class="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
	/>
</div>

<div>
	<!-- <header>
		<div class="min-h-screen flex flex-col items-center justify-center">
			<h2
				class="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold border-b-8 border-orange-main pb-4 mb-8"
			>
				{campaign?.name}
			</h2>
			<p class="max-w-prose mb-6 font-sans prose text-white">
				{@html campaign?.excerpt}
			</p>
			<a href={`${campaign?.link}/info`} class={classes['primary-button']}>Read more</a>
		</div>
	</header> -->

	<header class="px-4 min-h-screen flex flex-col items-center justify-center pt-32">
		<div class="glass p-10 max-w-prose mx-auto rounded-xl mb-32">
			<h2 class={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 ${campaign?.font}`}>
				{campaign?.name}
			</h2>
			<div class="font-sans prose md:prose-lg lg:prose-xl text-white">
				{@html campaign.excerpt}
			</div>
		</div>
	</header>

	<main class="px-4">
		<section class="section flex items-stretch justify-center">
			<div class="flex-1 flex flex-col max-w-screen-2xl glass p-2 rounded-t-2xl rounded-b-none">
				<div class="px-8 py-4">
					<h3 class={`section-heading ${campaign.font}`}>The Misfits</h3>
				</div>
				{#if campaign?.players?.length}
					<div class="flex-1 h-full flex w-full items-stretch justify-center">
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
			</div>
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
		@apply min-h-screen py-16;
	}

	.section-heading {
		@apply text-2xl md:text-3xl lg:text-4xl font-semibold;
	}
</style>
