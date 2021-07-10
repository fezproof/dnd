<script lang="ts">
	import { base } from '$app/paths';
	import classes from '$lib/styles/button.module.css';

	export let fixed: boolean = false;
	const absolute = !fixed;

	export let image: string;
	export let link: string;
	export let title: string;
	export let font: string;
</script>

<div class="campaign-link left">
	<div class="image-clip clip" tabindex="0">
		<div class="inset-0" class:fixed class:absolute>
			<img src={`${base}${image}`} alt={title} class="object-cover h-full w-full" />
			<div class="tint" />
		</div>
		<div class="title-container">
			<div class="title">
				<h2 class={`mb-4 ${font}`}>{title}</h2>
				<a href={`${base}${link}`} class={`${classes['primary-button']} link`}>Enter</a>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.campaign-link {
		@apply mb-2 last:mb-0 md:mb-0 md:mr-2 md:last:mr-0 h-full w-full transition-all outline-none flex-[1];
	}

	.campaign-link:hover,
	.campaign-link:focus-within {
		flex: 1 1 50%;
	}

	.image-clip {
		@apply h-full w-full overflow-x-hidden;
	}

	.tint {
		@apply absolute inset-0 h-full w-full bg-black opacity-0 transition-opacity;
	}

	.campaign-link:hover .tint,
	.campaign-link:focus-within .tint {
		@apply opacity-40;
	}

	.clip {
		clip-path: inset(0 0 0 0);
	}

	@media (min-width: 768px) {
		.campaign-link:nth-child(even) .clip {
			clip-path: polygon(
				-8rem 0,
				100% 0,
				calc(100% - 6rem) 40%,
				calc(100% - 1rem) 75%,
				100% 100%,
				0 100%,
				5rem 71%
			);
		}

		.campaign-link:nth-child(odd) .clip {
			clip-path: polygon(
				0 0,
				calc(100% - 8rem) 0,
				calc(100% + 5rem) 71%,
				100% 100%,
				0 100%,
				calc(0% - 1rem) 75%,
				calc(0% - 6rem) 40%
			);
		}

		.campaign-link:first-child .clip {
			clip-path: polygon(0 0, calc(100% - 8rem) 0, calc(100% + 5rem) 71%, 100% 100%, 0 100%);
		}

		.campaign-link:last-child .clip {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, -1rem 75%, -6rem 40%);
		}

		.campaign-link:last-child:nth-child(even) .clip {
			clip-path: polygon(-8rem 0, 100% 0, 100% 100%, 0 100%, 5rem 71%);
		}
	}

	.title-container {
		@apply h-full relative overflow-hidden;
	}
	.title {
		@apply absolute inset-0 flex flex-col items-center justify-center text-6xl text-center font-extrabold uppercase px-20 opacity-0 transition-opacity w-80 mx-auto;
	}

	.campaign-link:hover .title,
	.campaign-link:focus-within .title {
		@apply opacity-100;
	}

	.link {
		@apply hidden;
	}

	.campaign-link:hover .link,
	.campaign-link:focus-within .link {
		@apply inline-block;
	}
</style>
