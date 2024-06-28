import { redirect, error } from '@sveltejs/kit';

// Laden der Daten
export async function load({ locals }) {
    if (!locals.user) {
        return {
            status: 307,
            redirect: '/login'
        };
    }

    try {
        // Abrufen aller Dokumente in der collection "calendar_events"
        const records = await locals.pb.collection("calendar_events").getFullList();
        const events = records.map(record => ({
            title: record.title,
            start: record.start,
            end: record.end
        }));
        return {
            events
        };
    } catch (err) {
        console.error('Fehler beim Abrufen der Kalenderereignisse:', err);
        throw error(500, 'Fehler beim Abrufen der Kalenderereignisse');
    }
}

// Speichern der Daten (Actions)
export const actions = {
    default: async ({ request, locals }) => {
        if (!locals.user) {
            throw redirect(307, '/login');
        }

        if (!locals.user.admin) {
            throw error(403, 'Nur Admins dürfen diese Aktion ausführen');
        }

        try {
            const data = await request.json();
            const record = await locals.pb.collection("calendar_events").create(data);
            return {
                status: 201,
                body: record
            };
        } catch (err) {
            console.error('Fehler beim Erstellen des Kalenderereignisses:', err);
            throw error(500, 'Fehler beim Erstellen des Kalenderereignisses');
        }
    }
};
