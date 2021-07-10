<script>
	import Nav from '$lib/components/Nav.svelte';

	import '../app.css';
</script>

<svelte:head>
	<title>Eos Rising: D&D campaign</title>
	<meta
		name="description"
		content="Eos Rising is a home Dungeon and Dragons game, and this website has been created to help me and my players"
	/>
</svelte:head>

<Nav />
<slot />
