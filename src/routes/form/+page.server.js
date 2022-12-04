import { redirect } from '@sveltejs/kit'

/** @type {import (./$types).Actions} */
export const actions = {
	async default(event) {
		console.log('action', event.url.pathname, event.request.method)
		throw redirect(303, '/')
	}
}
