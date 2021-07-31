<script context="module" lang="ts">
	import ShardItem from '$lib/components/Shards/ShardItem.svelte';
	import ShardsContainer from '$lib/components/Shards/ShardsContainer.svelte';
	import { loadQuery } from '$lib/graphql';

	export const load = loadQuery({
		query: `
      query getCampaigns {
        campaigns {
          slug
          name
          font
          image
          link
        }
      }
    `,
		variables: {}
	});
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
		{#each campaigns as campaign (campaign.slug)}
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
