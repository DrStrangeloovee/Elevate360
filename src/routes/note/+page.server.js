import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
    try {
        // Try fetching requested note
        return {
            note: await locals.pb.collection('notes').getOne(`${url.searchParams.get('id')}`)
        }
    } catch (error) {
        // Redirect to new empty note
        redirect(307, '/note/new');
    }
}