<script context="module" lang="ts">
	// import { base } from '$app/paths';
	// import type { Load } from '@sveltejs/kit';

	// export const load: Load = async ({ fetch }) => {
	// 	const result = await fetch(`${base}/index.json`).then((r) => r.json());
	// 	return {
	// 		props: { result }
	// 	};
	// };
</script>

<script lang="ts">
	// import type { IndexGetResult } from './index.json';

	// export let result: IndexGetResult;
</script>

<div class="h-screen flex flex-col flex-nowrap">
	<div class="h-32 flex items-center justify-center">
		<h1 class="text-5xl font-semibold">Scroll'd</h1>
	</div>

	<main class="flex-1">
		<div
			class="w-full h-full p-8 flex flex-nowrap flex-col md:flex-row items-stretch justify-items-stretch"
		>
			<a href="eos-rising" class="campaign-link">
				<div class="relative h-full w-full">
					<img
						src="eos-rising.jpg"
						alt="Eos Rising"
						class="absolute inset-0 object-cover h-full w-full"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
					<div class="absolute bottom-0 left-0 w-full py-4 px-6">
						<h2 class="text-2xl">Eos Rising</h2>
					</div>
				</div>
			</a>
			<a href="hunters-arcane" class="campaign-link">
				<div class="relative h-full w-full">
					<img
						src="hunters-arcane.jpg"
						alt="Hunters Of The Arcane"
						class="absolute inset-0 object-cover h-full w-full"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
					<div class="absolute bottom-0 left-0 w-full py-4 px-6">
						<h2 class="text-2xl">Hunters Of The Arcane</h2>
					</div>
				</div>
			</a>
			<a href="unfortunate" class="campaign-link">
				<div class="relative h-full w-full">
					<img
						src="unfortunate.jpg"
						alt="Series Of Unfortunate Events"
						class="absolute inset-0 object-cover h-full w-full"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
					<div class="absolute bottom-0 left-0 w-full py-4 px-6">
						<h2 class="text-2xl">Series Of Unfortunate Events</h2>
					</div>
				</div>
			</a>
		</div>
	</main>
</div>

<style lang="postcss">
	.campaign-link {
		@apply bg-red-300 h-1/3 md:w-1/3 md:h-full flex-initial m-2 transition-all outline-none;
	}
	.campaign-link:hover,
	.campaign-link:focus {
		@apply h-4/5 md:w-10/12 md:h-full;
	}
	.campaign-link:focus {
		@apply ring ring-purple-600 ring-offset-4 ring-offset-green-900;
	}
</style>
