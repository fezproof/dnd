<!-- <script context="module" lang="ts">
	import { assets, base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, page }) => {
		const campaign = page.params.campaign;

		const result = await fetch(`${base}/${campaign}.json`).then((r) => r.json());

		return {
			props: { result }
		};
	};
</script> -->
<script lang="ts">
	// import type { IndexGetResult } from './index.json';

	// export let result: IndexGetResult;

	import { base } from '$app/paths';

	import classes from '$lib/styles/button.module.css';
</script>

<div class="absolute top-0 left-0 right-0 z-[-1] h-full w-full">
	<img
		src={`${base}/eos-rising.jpg`}
		alt="eos rising hero"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div
		class="bg-gradient-to-b from-transparent via-green-main/40 to-green-main h-full w-full absolute inset-0"
	/>
</div>

<div class="min-h-screen flex flex-col items-center justify-center">
	<h2
		class="mt-40 text-4xl md:text-6xl lg:text-7xl font-semibold border-b-8 border-orange-main font-eos mb-8"
	>
		Eos Rising
	</h2>
	<p class="max-w-prose px-6 mb-6 font-serif text-2xl">
		Tua amin! khila amin elen sila lumenn omentilmo Tulien. Faina templa lle naa vanima Nadorhuanrim
		ed' i'ear ar' elenea!. Amin feuya ten' lle manke naa i'omentien Saurarea amin irma fion laure
		sereg. Ai' atar Ithil'quessir lle naa belegohtar asca melloneamin. Avarierea mellon en
		mellonamin n'ndengina ta ho mereth en draugrim.
	</p>
	<a href="#" class={classes['primary-button']}> Read more </a>
</div>

<main>
	<div class="h-96 mx-auto max-w-prose text-center">
		<h3 class="text-4xl mb-6 font-semibold font-eos">The Misfits</h3>
	</div>
	<div class="h-96 mx-auto max-w-prose text-center">
		<h3 class="text-4xl mb-6 font-semibold font-eos">The World</h3>
	</div>

	<div class="h-96 mx-auto max-w-prose text-center">
		<h3 class="text-4xl mb-6 font-semibold font-eos">Mission Logs</h3>
	</div>
</main>
