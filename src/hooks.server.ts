import { pb } from '$lib/tools/pb';
import type { Handle } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export const handle: Handle = async ({ event, resolve }) => {
    event.locals.pb = pb

    const response = await resolve(event);
    return response;
} 