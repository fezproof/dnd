<script>
	import ShardItem from '$lib/components/Shards/ShardItem.svelte';
	import ShardsContainer from '$lib/components/Shards/ShardsContainer.svelte';

	const campaigns = [
		{ image: '/eos-rising.jpg', link: '/eos-rising', title: 'Eos Rising', font: 'font-eos' },
		{
			image: '/hunters-arcane.jpg',
			link: '/hunters-arcane',
			title: 'Hunters of the Arcane',
			font: 'font-hunters'
		},
		{
			image: '/unfortunate.jpg',
			link: '/unfortuante',
			title: 'A series of Unfortunate Events',
			font: 'font-unfortunate'
		}
	];
</script>

<main class="mt-40 flex-1 px-8 pb-8 flex w-full items-stretch justify-center">
	<ShardsContainer>
		{#each campaigns as campaign (campaign.link)}
			<ShardItem {...campaign} />
		{/each}
	</ShardsContainer>
</main>
