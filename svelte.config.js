import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import preprocess from 'svelte-preprocess';
import {mdsvex} from "mdsvex"


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		// preprocess(),
		mdsvex({
			extensions: ['.md']
		}),
		vitePreprocess(),
	],
	
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/hire-ryan" : "",
		},
		// target: "#svelte"
	}
};

export default config;
