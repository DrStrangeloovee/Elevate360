// Laden der Daten
export async function load({ locals }) {
    if (!locals.user) {
        throw redirect(307, '/login');
    }

    try {
        const events = await locals.pb.collection("calendar_events").getFullList();
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
