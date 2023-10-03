import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';
import {PUBLIC_PB_URL, PUBLIC_PB_ADMIN, PUBLIC_PB_PW} from '$env/static/public'
export const load : PageLoad = (async () => {


    const pb = new PocketBase(PUBLIC_PB_URL);      
    const authData = await pb.admins.authWithPassword(PUBLIC_PB_ADMIN, PUBLIC_PB_PW);

    const records = await pb.collection('project').getFullList({
        sort: '-created',
    });
    




    return {records};
}) satisfies PageLoad;