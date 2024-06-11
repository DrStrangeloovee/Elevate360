import { redirect } from '@sveltejs/kit';

// Laden der Daten
export async function load({ method, locals }) {
    if (method === 'GET') {
        try {
            const events = await locals.pb.collection('calendar_events').getFullList();
            return {
                status: 200,
                body: events
            };
        } catch (error) {
            return {
                status: 500,
                body: { error: 'Fehler beim Abrufen der Kalenderereignisse' }
            };
        }
    } else {
        redirect(307, '/login'); 
    }
}

// Speichern der Daten
export async function load({ request, locals }) {
    if (request.method === 'POST') {
        try {
            const data = await request.json();
            const record = await locals.pb.collection('calendar_events').create(data);
            return {
                status: 201,
                body: record
            };
        } catch (error) {
            return {
                status: 500,
                body: { error: 'Fehler beim Erstellen des Kalenderereignisses' }
            };
        }
    } else {
        return {
            status: 405,
            body: { error: 'Methode nicht erlaubt' }
        };
    }
}
