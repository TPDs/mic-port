import type { PageLoad } from './$types';
import {pb} from '$lib/tools/pb'

export const prerender = 'auto';

export const load: PageLoad = async ({  })=> {     
       
        const records = await pb.collection('project').getFullList({
        sort: '-created',
    });    
   
    return {records}};