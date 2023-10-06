import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';

export const prerender = false;

console.log('***********');
console.log(env.PUBLIC_PB_URL);
console.log('***********');

export const pb = new PocketBase(env.PUBLIC_PB_URL);
export const authData =  pb.admins.authWithPassword(env.PUBLIC_PB_ADMIN as string , env.PUBLIC_PB_PW as string);

