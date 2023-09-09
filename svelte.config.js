import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node'
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),	
	kit: {			
		adapter: adapter({
			out: 'build',
			precompress: false,
			envPrefix: '',
			polyfill: true,
			csrf: {
				checkOrigin: false,
			}, 
			
		},
		),
	},
};

export default config;
