<script>
	import { base } from '$app/paths';
	import D20 from '$lib/svgs/d20.svelte';
</script>

<nav class="absolute top-0 left-0 px-6 py-4 w-full bg-gradient-to-b from-green-main to-transparent">
	<a
		href={`${base}/`}
		class="h-20 md:h-32 inline-flex items-center justify-start uppercase mr-auto"
	>
		<D20 class="h-full w-auto mr-3" />
		<h1 class="text-6xl font-bold mr-auto">Scroll'd</h1>
	</a>
</nav>
