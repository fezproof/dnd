<script lang="ts">
	import { base } from '$app/paths';
	import classes from '$lib/styles/button.module.css';

	export let fixed: boolean = false;
	let absolute = !fixed;

	export let image: string;
	export let link: string;
	export let title: string;
	export let font: string;
</script>

<div class="shard clip relative">
	<div
		class={`${fixed ? 'left-0 right-0' : '-left-24 -right-24'} image-container`}
		class:fixed
		class:absolute
	>
		<img
			src={`${base}${image}`}
			alt={title}
			class="object-cover h-full w-full"
			class:object-top={absolute}
		/>
		<div class="tint" />
	</div>
	<div class="title-container">
		<div class="title">
			<h2 class={`mb-4 ${font}`}>{title}</h2>
			<a href={`${base}${link}`} class={classes['primary-button']}>Enter</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.shard {
		@apply mb-2 last:mb-0 md:mb-0 md:mr-2 md:last:mr-0 h-full w-full transition-all outline-none flex-[1] min-w-[5rem];
	}

	.shard:hover,
	.shard:focus-within {
		flex: 1 1 50%;
	}

	.tint {
		@apply absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-0 transition-opacity;
	}

	.shard:hover .tint,
	.shard:focus-within .tint {
		@apply opacity-40;
	}

	.clip {
		clip-path: inset(0 0 0 0);
	}

	@media (min-width: 768px) {
		.clip:nth-child(even) {
			clip-path: polygon(
				-5rem 0,
				100% 0,
				calc(100% - 6rem) 40%,
				calc(100% - 1rem) 75%,
				100% 100%,
				0 100%,
				3rem 71%
			);
		}

		.clip:nth-child(odd) {
			clip-path: polygon(
				0 0,
				calc(100% - 5rem) 0,
				calc(100% + 3rem) 71%,
				100% 100%,
				0 100%,
				calc(0% - 1rem) 75%,
				calc(0% - 6rem) 40%
			);
		}

		.clip:first-child {
			clip-path: polygon(0 0, calc(100% - 5rem) 0, calc(100% + 3rem) 71%, 100% 100%, 0 100%);
		}

		.clip:last-child {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, -1rem 75%, -6rem 40%);
		}

		.clip:last-child:nth-child(even) {
			clip-path: polygon(-5rem 0, 100% 0, 100% 100%, 0 100%, 3rem 71%);
		}
	}

	.image-container {
		@apply top-0 bottom-0 pointer-events-none;
	}

	.shard:last-child .image-container {
		@apply right-0;
	}

	.title-container {
		@apply h-full relative overflow-hidden;
	}
	.title {
		@apply absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center text-6xl text-center font-extrabold uppercase px-20 opacity-0 transition-opacity w-80 mx-auto;
	}

	.shard:hover .title,
	.shard:focus-within .title {
		@apply opacity-100;
	}
</style>
