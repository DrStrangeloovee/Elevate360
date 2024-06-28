import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    let events;
    try {
        // Daten aus PocketBase laden
        const events = await locals.pb.collection('calendar_events').getFullList();
        events = { props: events }

    } catch (error) {
        //redirect(307, '/error');
    }
    return {
        props: { events }
    };
}