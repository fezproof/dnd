<script lang="ts">
	import { base } from '$app/paths';
	import classes from '$lib/styles/button.module.css';

	export let fixed: boolean = false;
	let absolute = !fixed;

	export let image: string;
	export let link: string;
	export let title: string;
	export let font: string;
	export let loading: string = undefined;
</script>

<div class="shard clip relative">
	<div
		class={`${
			fixed ? 'left-0 right-0' : 'md:-left-24 md:-right-24 w-full md:w-auto'
		} image-container`}
		class:fixed
		class:absolute
	>
		<img
			src={image}
			alt={title}
			class="object-cover h-full w-full"
			class:object-top={absolute}
			width="1000"
			height="1000"
			{loading}
		/>
		<div class="tint" />
	</div>
	<div class="title-container ">
		<div class="title">
			<div class="title-transition">
				<h2 class={`title-text ${font}`}>{title}</h2>
				<a href={link} class={classes['primary-button']}>Enter</a>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.shard {
		@apply mb-2 last:mb-0 md:mb-0 md:mr-2 md:last:mr-0 h-full w-full transition-all outline-none flex-[1] md:min-w-[5rem];
	}

	.shard:hover,
	.shard:focus-within {
		flex: 1 1 50%;
	}

	.shard:focus-within {
		@apply transition-none;
	}

	.tint {
		@apply absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-0 transition-opacity;
	}

	.shard:hover .tint,
	.shard:focus-within .tint {
		@apply opacity-60;
	}

	.clip {
		clip-path: inset(0 0 0 0);
	}

	@media (min-width: 768px) {
		.clip:nth-child(even) {
			clip-path: polygon(
				-3.5rem 0,
				100% 0,
				calc(100% - 4rem) 40%,
				calc(100% - 1rem) 75%,
				100% 100%,
				0 100%,
				3rem 71%
			);
		}

		.clip:nth-child(odd) {
			clip-path: polygon(
				0 0,
				calc(100% - 3.5rem) 0,
				calc(100% + 3rem) 71%,
				100% 100%,
				0 100%,
				calc(0% - 1rem) 75%,
				calc(0% - 4rem) 40%
			);
		}

		.clip:first-child {
			clip-path: polygon(0 0, calc(100% - 3.5rem) 0, calc(100% + 3rem) 71%, 100% 100%, 0 100%);
		}

		.clip:last-child {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, -1rem 75%, -4rem 40%);
		}

		.clip:last-child:nth-child(even) {
			clip-path: polygon(-3.5rem 0, 100% 0, 100% 100%, 0 100%, 3rem 71%);
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

	.title-transition {
		@apply transition-transform ease-linear delay-75 duration-[0ms] transform translate-y-[100vh];
	}

	.title {
		@apply absolute top-0 right-0 bottom-0 left-0 mx-auto px-24 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-[0ms] delay-[0ms];
	}

	.title-text {
		@apply text-2xl lg:text-5xl xl:text-6xl font-extrabold uppercase mb-4;
	}

	.shard:hover .title-transition,
	.shard:focus-within .title-transition {
		@apply translate-y-0;
	}

	.shard:focus-within .title-transition {
		@apply transition-none;
	}

	.shard:hover .title,
	.shard:focus-within .title {
		@apply opacity-100 delay-150 duration-100;
	}

	.shard:focus-within .title {
		@apply transition-none;
	}
</style>
