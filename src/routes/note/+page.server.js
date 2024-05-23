import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
    if (url.searchParams.has('id')) {
        return {
            note: await locals.pb.collection('notes').getOne(`${url.searchParams.get('id')}`)
        };
    } else {
        //redirect(307, '/note/new');
    }
}