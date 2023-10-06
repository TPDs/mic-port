
import PocketBase from 'pocketbase';


declare global {
	declare namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase
		}
		// interface PageData {}
		// interface Platform {}
	}
}
