<main class="flex-1 px-8 pb-8 flex w-full items-stretch justify-center">
	<div class="w-full flex flex-nowrap flex-col md:flex-row items-stretch justify-evenly relative">
		<a href="eos-rising" class="campaign-link left">
			<div class="image-clip clip">
				<div class="fixed inset-0">
					<img src="eos-rising.jpg" alt="Eos Rising" class="object-cover h-full w-full" />
					<div class="tint" />
				</div>
				<div class="title-container">
					<h2 class="title font-eos">Eos Rising</h2>
				</div>
			</div>
		</a>
		<a href="hunters-arcane" class="campaign-link center">
			<div class="image-clip clip">
				<div class="fixed inset-0">
					<img
						src="hunters-arcane.jpg"
						alt="Hunters Of The Arcane"
						class="object-cover h-full w-full"
					/>
					<div class="tint" />
				</div>
				<div class="title-container">
					<h2 class="title font-hunters">Hunters of the Arcane</h2>
				</div>
			</div>
		</a>
		<a href="unfortunate" class="campaign-link right">
			<div class="image-clip clip">
				<div class="fixed inset-0">
					<img
						src="unfortunate.jpg"
						alt="Series Of Unfortunate Events"
						class="object-cover h-full w-full"
					/>
					<div class="tint" />
				</div>
				<div class="title-container font-unfortunate">
					<h2 class="title">A Series of Unfortunate Events</h2>
				</div>
			</div>
		</a>
	</div>
</main>

<style lang="postcss">
	.campaign-link {
		@apply h-1/3 md:w-1/3 md:h-auto flex-shrink mr-8 last:mr-0 transition-all outline-none;
	}
	.campaign-link:hover,
	.campaign-link:focus {
		@apply h-5/6 md:h-auto md:w-3/5 flex-shrink-0;
	}

	.image-clip {
		@apply h-full w-full overflow-x-hidden;
	}

	.tint {
		@apply absolute inset-0 h-full w-full bg-black opacity-0 transition-opacity;
	}

	.campaign-link:hover .tint,
	.campaign-link:focus .tint {
		@apply opacity-40;
	}

	.left .clip {
		clip-path: polygon(0 0, calc(100% - 8rem) 0, calc(100% + 5rem) 71%, 100% 100%, 0 100%);
	}
	.center .clip {
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
	.right .clip {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, -1rem 75%, -6rem 40%);
	}

	.title-container {
		@apply h-full relative overflow-hidden;
	}
	.title {
		@apply absolute inset-0 flex items-center justify-center text-6xl text-center font-extrabold uppercase px-20 opacity-0 transition-opacity w-80 mx-auto;
	}

	.campaign-link:hover .title,
	.campaign-link:focus .title {
		@apply opacity-100;
	}
</style>
