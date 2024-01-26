import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: false,
			envPrefix: '',
			polyfill: false,
			csrf: {
				checkOrigin: false
			}, prerender: {
				handleHttpError: ({ path, referrer, message }) => {
					// ignore deliberate link to shiny 404 page
					if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
						return;
					}

					// otherwise fail the build
					throw new Error(message);
				}
			}
		})
	}
};

export default config;
