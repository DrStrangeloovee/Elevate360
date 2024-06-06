

import { fetchCalendarData } from '$lib/Calendar.svelte'; // Passe den Pfad zur Datei api.js entsprechend deiner Projektstruktur an

export async function load() {
  const events = await fetchCalendarData(); // Funktion zum Laden der Kalenderdaten
  return {
    props: {
      events
    }
  };
}
