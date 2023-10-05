import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';

export const pb = new PocketBase(env.PUBLIC_PB_URL);
export const authData = await pb.admins.authWithPassword(env.PUBLIC_PB_ADMIN, env.PUBLIC_PB_PW);
const records = await pb.collection('project').getFullList({
  sort: '-created',
});



