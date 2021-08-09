<script>
	import { base } from '$app/paths';
	import D20 from '$lib/svgs/d20.svelte';
</script>

<div class="fixed w-full z-10">
	<nav
		class="sticky top-0 px-6 py-4 w-full bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center bg-clip-padding border-b-4 border-transparent"
	>
		<a href={`${base}/`} class="h-16 inline-flex items-center justify-start uppercase">
			<D20 class="h-full w-auto mr-3" />
			<h1 class="text-3xl font-serif">Scroll'd</h1>
		</a>
	</nav>
</div>
