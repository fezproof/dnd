<script>
	import { base } from '$app/paths';
	import D20 from '$lib/svgs/d20.svelte';
</script>

<a
	href={`${base}/`}
	class="h-32 ml-6 mr-auto mt-4 mb-6 inline-flex items-center justify-start uppercase"
>
	<D20 class="h-full w-auto mr-2" />
	<h1 class="text-6xl font-bold">Scroll'd</h1>
</a>
