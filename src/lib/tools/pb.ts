import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';


export const pb = new PocketBase(env.PRIVATE_PB_URL);
export const authData =  pb.admins.authWithPassword(env.PRIVATE_PB_ADMIN as string , env.PRIVATE_PB_PW as string);

