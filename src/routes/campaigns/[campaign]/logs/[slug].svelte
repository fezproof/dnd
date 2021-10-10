<script context="module" lang="ts">
	import CampaignHeroImage from '$lib/components/CampaignHeroImage.svelte';
	import type { GetLogQuery } from '$lib/graphql/generated/operations';
	import { loadData } from '$lib/utils/queryLoader';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = loadData;
</script>

<script lang="ts">
	export let log: GetLogQuery['log'] | undefined;
</script>

<header class="mt-32 px-8 max-w-prose mx-auto">
	<CampaignHeroImage
		imageUrl={log?.image}
		imageAlt={`${log?.name} hero`}
		imageHeight={900}
		imageWidth={1600}
	/>

	<div class="absolute inset-0 bg-black/80" />

	<h2 class={`text-3xl text-orange-main ${log?.campaign?.font} pb-8 relative`}>
		{log?.name}
	</h2>
</header>

<main class="px-8 prose max-w-prose mx-auto pb-24 relative">
	{@html log?.content?.prose}
</main>
