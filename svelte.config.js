import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const kit = {
	adapter: adapter(),
	// hydrate the <div id="svelte"> element in src/app.html
	target: '#svelte'
};

if (!dev) {
	kit.paths = {
		base: '/dnd',
		assets: '/dnd'
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit
};

export default config;
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)

process.env.TAILWIND_MODE = dev ? 'watch' : 'build';
