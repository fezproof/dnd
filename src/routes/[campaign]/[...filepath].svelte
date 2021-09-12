<script context="module" lang="ts">
	import { base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, page: { params } }) => {
		const response = await fetch(`${base}/${params.campaign}/data/${params.filepath}.json`);
		return { props: response.json() };
	};
</script>

<script lang="ts">
	export let result: any;
</script>

<main class="mt-24 prose max-w-prose mx-auto">{@html result.content}</main>
