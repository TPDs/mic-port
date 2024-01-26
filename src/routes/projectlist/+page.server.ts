import type { PageServerLoad } from './$types';

const prerender = false; // set to true to enable prerendering

export const load: PageServerLoad = (async ({ locals }) => {
    const records = await locals.pb.collection('project').getFullList({
        sort: '-created',
    });    
   // console.log('records', records);
    return { records: records };
    
})