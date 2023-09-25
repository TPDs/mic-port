import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public'

const pb = new PocketBase(env.PUBLIC_PB_URL);
const adminData = await pb.admins.authWithPassword(env.PUBLIC_PB_ADMIN, env.PUBLIC_PB_PW);
