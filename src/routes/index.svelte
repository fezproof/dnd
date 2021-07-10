<script context="module" lang="ts">
	import { base } from '$app/paths';
	import ShardItem from '$lib/components/Shards/ShardItem.svelte';
	import ShardsContainer from '$lib/components/Shards/ShardsContainer.svelte';
	import type { CampaignResult } from '$lib/getCampaignMD';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const { campaigns } = await fetch(`${base}/campaigns.json`).then((r) => r.json());

		return {
			props: { campaigns }
		};
	};
</script>

<script lang="ts">
	export let campaigns: CampaignResult[];
</script>

<main class="flex-1 flex w-full items-stretch justify-center h-screen">
	<ShardsContainer>
		{#each campaigns as campaign (campaign.slug)}
			<ShardItem
				fixed
				font={campaign.data.font}
				image={campaign.data.image}
				link={campaign.slug}
				title={campaign.data.name}
			/>
		{/each}
	</ShardsContainer>
</main>
