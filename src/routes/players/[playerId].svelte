<script context="module" lang="ts">
	import type { GetPlayerQuery } from '$lib/graphql/generated/operations';
	import { loadData } from '$lib/utils/queryLoader';

	export const load = loadData;
</script>

<script lang="ts">
	export let player: GetPlayerQuery['player'];
</script>

<header class="px-4 max-w-prose mx-auto">
	<h2 class="mt-40 text-white text-3xl ">{player?.name}</h2>
</header>
<main class="prose px-4 max-w-prose mx-auto text-gray-100 my-8">
	{@html player?.content.prose}
</main>
