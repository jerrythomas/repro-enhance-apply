import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	console.log('endpoint', event.url.pathname, event.request.method)
	throw redirect(303, '/')
}
