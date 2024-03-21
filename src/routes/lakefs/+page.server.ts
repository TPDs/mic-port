import type { PageServerLoad } from './$types';


const prerender = false; // set to true to enable prerendering

export const load: PageServerLoad = (async ({ locals }) => {
    const records = await locals.pb.collection('attack_data').getFullList({
        sort: '-created',
    });    
    return { records: records };

})