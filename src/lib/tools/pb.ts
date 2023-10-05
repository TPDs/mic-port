import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';

export const pb = new PocketBase(env.PUBLIC_PB_URL);
export const authData =  pb.admins.authWithPassword(env.PUBLIC_PB_ADMIN as string , env.PUBLIC_PB_PW as string);

