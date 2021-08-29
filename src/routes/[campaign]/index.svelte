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
	<meta name="title" content={`Scroll'd: ${campaign?.name}`} />
	<meta name="description" content={campaign?.excerpt} />

	<!-- <meta property="og:type" content="website" />
	<meta property="og:title" content={`Scroll'd: ${campaign?.name}`} />
	<meta property="og:description" content={campaign?.excerpt} />
	<meta property="og:image" content={campaign?.image} /> -->
</svelte:head>

<header>
	<CampaignHeroImage
		imageUrl={campaign?.image}
		imageAlt={`${campaign?.name} hero`}
		imageHeight={900}
		imageWidth={1600}
	/>
	<div class="min-h-screen flex flex-col pt-28 justify-end items-stretch">
		<div class="px-8 pt-10 pb-16 relative">
			<div class="absolute -top-6 right-0 left-0 bottom-0 h-full w-full flex flex-col z-[-1]">
				<div class="h-24 w-full bg-gradient-to-t from-black/60 to-transparent" />
				<div class="flex-1 w-full bg-black/60" />
			</div>
			<div>
				<h2
					class={`inline-block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase border-b-8 border-orange-main pb-4 mb-8 ${campaign?.font}`}
				>
					{campaign?.name}
				</h2>
				<p class="mb-8 font-sans prose text-white max-w-prose">
					{@html campaign?.excerpt}
				</p>
				<a href={`${campaign?.link}/info`} class={classes['primary-button']}>Read more</a>
			</div>
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

	<section class="section flex flex-col">
		<h3 class={`section-heading ${campaign?.font}`}>Mission Logs</h3>

		{#if campaign?.logs?.length}
			<div class="px-8 mx-auto max-w-screen-2xl flex-1 w-full">
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-8 items-stretch justify-center"
				>
					{#each campaign?.logs as log (log.id)}
						<figure
							class="bg-gray-500 text-left flex flex-col justify-end items-stretch py-8 px-4 relative h-[32rem]"
						>
							<div class="absolute inset-0 h-full w-full">
								<img src={log?.image} alt={log.name} class="absolute inset-0 h-full w-full" />
								<div class="absolute inset-0 h-full w-full bg-black/60" />
							</div>
							<div class="relative">
								<h3 class="italic text-lg font-serif mb-4">{log.name}</h3>
								<div class="prose text-white mb-8 normal-case">{@html log?.content?.excerpt}</div>
								<a href={log?.link} class={classes['primary-button']}>Read full log</a>
							</div>
						</figure>
					{/each}
				</div>
			</div>
		{:else}
			<p class="italic text-lg font-serif max-w-prose mx-auto">Coming soon...</p>
		{/if}
	</section>

	<section class="section">
		<h3 class={`section-heading ${campaign?.font}`}>The World</h3>
		<p class="italic text-lg font-serif max-w-prose mx-auto">Coming soon...</p>
	</section>
</main>

<style lang="postcss">
	.section {
		@apply min-h-screen mx-auto text-center pt-28 pb-12 uppercase;
	}

	.section-heading {
		@apply text-3xl md:text-4xl lg:text-5xl inline-block mx-auto mb-8 font-semibold border-b-8 border-orange-main pb-2;
	}
</style>
