<script>
	import { base } from '$app/paths';
	import D20 from '$lib/svgs/d20.svelte';
</script>

<div class="fixed w-full z-10 top-0 left-0 right-0">
	<nav
		class="sticky top-0 px-6 py-4 w-full bg-gradient-to-b from-black/80 to-transparent flex items-center justify-center"
	>
		<a href={`${base}/`} class="h-16 inline-flex items-center justify-start uppercase">
			<D20 class="h-full w-auto mr-3" />
			<h1 class="text-3xl font-serif">Scroll'd</h1>
		</a>
	</nav>
</div>
