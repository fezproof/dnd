<script>
	import { base } from '$app/paths';
	import D20 from '$lib/svgs/d20.svelte';
</script>

<nav
	class="z-10 absolute top-0 px-6 py-4 w-full bg-gradient-to-b from-black to-transparent flex items-center justify-center"
>
	<a href={`${base}/`} class="h-20 md:h-32 inline-flex items-center justify-start uppercase">
		<D20 class="h-full w-auto mr-3" />
		<h1 class="text-6xl font-bold">Scroll'd</h1>
	</a>
</nav>
