<main class="flex-1 px-8 pb-8 flex w-full items-stretch justify-center">
	<div class="w-full flex flex-nowrap flex-col md:flex-row items-stretch justify-evenly">
		<a href="/eos-rising" class="campaign-link">
			<div class="relative h-full w-full">
				<img
					src="/eos-rising.jpg"
					alt="Eos Rising"
					class="absolute inset-0 object-cover h-full w-full"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
				<div class="absolute bottom-0 left-0 w-full py-4 px-6">
					<h2 class="text-center font-serif text-3xl uppercase font-extrabold">Eos Rising</h2>
				</div>
			</div>
		</a>
		<a href="/hunters-arcane" class="campaign-link">
			<div class="relative h-full w-full">
				<img
					src="/hunters-arcane.jpg"
					alt="Hunters Of The Arcane"
					class="absolute inset-0 object-cover h-full w-full"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
				<div class="absolute bottom-0 left-0 w-full py-4 px-6">
					<h2 class="text-center font-serif text-3xl uppercase font-extrabold">
						Hunters Of The Arcane
					</h2>
				</div>
			</div>
		</a>
		<a href="/unfortunate" class="campaign-link">
			<div class="relative h-full w-full">
				<img
					src="/unfortunate.jpg"
					alt="Series Of Unfortunate Events"
					class="absolute inset-0 object-cover h-full w-full"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
				<div class="absolute bottom-0 left-0 w-full py-4 px-6">
					<h2 class="text-center font-serif text-3xl uppercase font-extrabold">
						Series Of Unfortunate Events
					</h2>
				</div>
			</div>
		</a>
	</div>
</main>

<style lang="postcss">
	.campaign-link {
		@apply bg-red-300 h-1/3 md:w-1/3 md:h-auto flex-initial m-2 transition-all outline-none;
	}
	.campaign-link:hover,
	.campaign-link:focus {
		@apply h-5/6 md:h-auto md:w-5/6;
	}
	.campaign-link:focus {
		@apply ring ring-purple-600 ring-offset-4 ring-offset-green-900;
	}
</style>
