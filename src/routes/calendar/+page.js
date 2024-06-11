import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    try {
        // Daten aus PocketBase laden
        const events = await locals.pb.collection('calendar_events').getFullList();
        return {
            props: { events }
        };
    } catch (error) {
        throw redirect(307, '/error');
    }
}
