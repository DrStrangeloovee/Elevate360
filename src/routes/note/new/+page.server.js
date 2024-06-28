import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    console.log("creating new noteeeee");
    let newRecordId = null;
    try {
        const record = await locals.pb.collection('notes').create({ owner: locals.user.id });
        newRecordId = record.id;
    } catch (error) {
        console.log('error', error);
    }
    redirect(302, `/note?id=${newRecordId}`);
}