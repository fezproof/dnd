<script context="module" lang="ts">
	import CampaignHeroImage from '$lib/components/CampaignHeroImage.svelte';
	import type { GetCampaignInfoQuery } from '$lib/graphql/generated/operations';
	import { loadData } from '$lib/utils/queryLoader';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = loadData;
</script>

<script lang="ts">
	export let campaign: GetCampaignInfoQuery['campaign'] | undefined;
</script>

<header class="mt-32 px-8 max-w-prose mx-auto">
	<CampaignHeroImage
		imageUrl={campaign?.image?.src || ''}
		imageAlt={`${campaign?.name} hero`}
		imageHeight={900}
		imageWidth={1600}
	/>
	<div class="absolute inset-0 bg-black/80" />

	<h2 class={`text-3xl text-white ${campaign?.font} pb-8 relative`}>
		{campaign?.name}
	</h2>
</header>

<main class="px-8 prose max-w-prose mx-auto text-white relative">
	{@html campaign?.content?.prose}
</main>
