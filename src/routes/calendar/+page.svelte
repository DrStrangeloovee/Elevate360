<script context="module">
  // Importiere die load-Funktion aus der page.server.js
  export { load } from './page.server.js';
</script>

<script>
// Importiere Calendar von lib
import Calendar from '$lib/calendar.svelte';

export let data;

// Übernehme die Events aus den geladenen Daten
let events = data.events;

// Funktion zum Speichern eines neuen Events
async function saveEvent(event) {
  const response = await fetch('/calendar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event)
  });
  if (response.ok) {
    // Nach dem Speichern die Events neu laden
    const data = await response.json();
    events = data.events;
  } else {
    console.error('Fehler beim Speichern des Ereignisses:', response.statusText);
  }
}

// Event-Handler für das "eventDropped"-Event
function handleEventDropped(event) {
  saveEvent(event);
}
</script>

<!-- Calendar-Komponente wird mit den Events und dem Event-Handler gerendert -->
<Calendar {events} on:eventDropped={handleEventDropped} />
