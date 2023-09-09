import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from "svelte-adapter-bun";
import dotenv from 'dotenv';

dotenv.config();


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),	
	kit: {			
		adapter: adapter({
			out: "build",
			assets: true,			
			development: true,
			// precompress: true,
			dynamic_origin: true,
			xff_depth: 1,
			
		},
		),
	},
};

export default config;
