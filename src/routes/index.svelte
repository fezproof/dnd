<script context="module" lang="ts">
	import ShardItem from '$lib/components/Shards/ShardItem.svelte';
	import ShardsContainer from '$lib/components/Shards/ShardsContainer.svelte';
	import { loadQuery } from '$lib/graphql';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async (params) => {
		return loadQuery({
			query: `
      query getCampaigns {
        campaigns {
          id
          name
          font
          image
          link
        }
      }
    `,
			variables: () => ({})
		})(params);
	};
</script>

<script lang="ts">
	export let campaigns: any[];
</script>

<svelte:head>
	<title>Scroll'd</title>
	<meta
		name="description"
		content="Our friend group loves D&D, and this website has been created to help me and my players appriciate and document our home games."
	/>
</svelte:head>

<main class="flex-1 flex w-full items-stretch justify-center h-screen">
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
