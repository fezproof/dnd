<script context="module" lang="ts">
	import CampaignHeroImage from '$lib/components/CampaignHeroImage.svelte';
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

<header>
	<CampaignHeroImage
		imageUrl={campaign?.image}
		imageAlt={`${campaign?.name} hero`}
		imageHeight={900}
		imageWidth={1600}
	/>
	<div
		class="min-h-screen flex flex-col pt-28 justify-end items-stretch md:items-start max-w-prose"
	>
		<div
			class="px-8 pt-6 pb-16 bg-gradient-to-t from-black/80 via-black/80 to-transparent md:from-transparent md:via-transparent"
		>
			<h2
				class={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold border-b-8 border-orange-main pb-4 mb-8 ${campaign?.font}`}
			>
				{campaign?.name}
			</h2>
			<p class="mb-8 font-sans prose text-white">
				{@html campaign?.excerpt}
			</p>
			<a href={`${campaign?.link}/info`} class={classes['primary-button']}>Read more</a>
		</div>
	</div>
</header>

<main>
	<section class="section flex flex-col">
		<h3 class={`section-heading ${campaign?.font}`}>The Misfits</h3>
		{#if campaign?.players?.length}
			<div
				class="flex-1 h-full flex w-full items-stretch justify-center px-8 mx-auto max-w-screen-2xl"
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
		<h3 class={`section-heading ${campaign?.font}`}>The World</h3>
		<p class="italic text-lg font-serif max-w-prose mx-auto">Coming soon...</p>
	</section>

	<section class="section">
		<h3 class={`section-heading ${campaign?.font}`}>Mission Logs</h3>

		{#if campaign?.logs?.length}
			{#each campaign?.logs as log (log.id)}
				<p class="italic text-lg font-serif max-w-prose mx-auto">{log.name}</p>
			{/each}
		{:else}
			<p class="italic text-lg font-serif max-w-prose mx-auto">Coming soon...</p>
		{/if}
	</section>
</main>

<style lang="postcss">
	.section {
		@apply min-h-screen mx-auto text-center pt-28 pb-12;
	}

	.section-heading {
		@apply text-3xl md:text-4xl lg:text-5xl inline-block mx-auto mb-8 font-semibold border-b-8 border-orange-main pb-2;
	}
</style>
