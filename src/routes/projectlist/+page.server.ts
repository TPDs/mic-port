import type { PageServerLoad } from './$types';

const prerender = true;

export const load: PageServerLoad = async ({ locals }) => {
    const records = await locals.pb.collection('project').getFullList({
        sort: '-created',
    });
    
   
    return { records: records };
}