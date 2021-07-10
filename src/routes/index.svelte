<script context="module" lang="ts">
	import { base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const { campaigns } = await fetch(`${base}/campaigns.json`).then((r) => r.json());

		return {
			props: { campaigns }
		};
	};
</script>

<script lang="ts">
	import ShardItem from '$lib/components/Shards/ShardItem.svelte';
	import ShardsContainer from '$lib/components/Shards/ShardsContainer.svelte';
	import type { CampaignData } from './campaigns.json';

	export let campaigns: CampaignData[];
</script>

<main class="flex-1 flex w-full items-stretch justify-center h-screen">
	<ShardsContainer>
		{#each campaigns as campaign (campaign.link)}
			<ShardItem fixed {...campaign} />
		{/each}
	</ShardsContainer>
</main>
