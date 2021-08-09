<script lang="ts">
	export let imageUrl: string;
	export let imageAlt: string;
	export let imageWidth: number;
	export let imageHeight: number;
</script>

<div class="absolute top-0 left-0 right-0 z-[-1] h-screen w-full">
	<img
		src={imageUrl}
		alt={imageAlt}
		width={imageWidth}
		height={imageHeight}
		class="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
	/>
	<div
		class="bg-gradient-to-b from-transparent via-black/40 to-black h-full w-full absolute top-0 right-0 bottom-0 left-0"
	/>
</div>
