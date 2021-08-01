<script context="module" lang="ts">
	import { loadQuery } from '$lib/graphql';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async (params) =>
		loadQuery({
			query: `
      query GetPlayer($id: ID!) {
        player(id: $id) {
          id
          name
          image
          content
        }
      }
    `,
			variables: ({ playerId }) => {
				return {
					id: playerId
				};
			}
		})(params);
</script>

<script lang="ts">
	export let player: any;
</script>

<header class="px-4 max-w-prose mx-auto">
	<h2 class="mt-40 text-white text-3xl ">{player.name}</h2>
</header>
<main class="prose px-4 max-w-prose mx-auto text-gray-100 my-8">
	{@html player.content}
</main>
