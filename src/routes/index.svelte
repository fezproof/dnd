<script context="module" lang="ts">
	import { base } from '$app/paths';
	import ShardItem from '$lib/components/Shards/ShardItem.svelte';
	import ShardsContainer from '$lib/components/Shards/ShardsContainer.svelte';
	import type { GetCampaignsQuery } from '$lib/graphql/generated/operations';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		return fetch(`${base}/index.json`).then((r) => r.json());
	};
</script>

<script lang="ts">
	export let campaigns: GetCampaignsQuery['campaigns'];
</script>

<svelte:head>
	<title>Scroll'd</title>
	<meta
		name="description"
		content="Our friend group loves D&D, and this website has been created to help me and my players appriciate and document our home games."
	/>
</svelte:head>

<div class="fixed inset-0 h-full w-full flex pt-24 md:p-0">
	<main class="flex-1 flex w-full items-stretch justify-center ">
		<ShardsContainer>
			{#each campaigns as campaign (campaign.id)}
				<ShardItem
					fixed
					font={campaign.font}
					image={campaign.image}
					link={campaign.link}
					title={campaign.name}
				/>
			{/each}
		</ShardsContainer>
	</main>
</div>
