<script context="module" lang="ts">
	import type { GetCampaignInfoQuery } from '$lib/graphql/generated/operations';
	import { loadData } from '$lib/utils/queryLoader';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = loadData;
</script>

<script lang="ts">
	export let campaign: GetCampaignInfoQuery['campaign'] | undefined;
</script>

<svelte:head>
	<title>Scroll'd: {campaign?.name}</title>
	<meta name="description" content={campaign?.excerpt} />
</svelte:head>

<div>
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
			class={`mt-40 text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold border-b-8 border-orange-main pb-4 mb-8 ${campaign.font}`}
		>
			{campaign?.name}
		</h2>
		<main class="prose max-w-prose text-white mx-auto">
			{@html campaign.content}
		</main>
	</div>
</div>
