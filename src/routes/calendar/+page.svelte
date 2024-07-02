<script>
  import Calendar from '$lib/calendar.svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Initialisiere events als writable store
  let events = writable([]);

  async function fetchEvents() {
    const response = await fetch('/calendar');
    if (response.ok) {
      const data = await response.json();
      // Setze den Wert des writable stores auf die abgerufenen Events
      events.set(data.events);
    } else {
      console.error('Fehler beim Abrufen der Ereignisse:', response.statusText);
    }
  }

  async function saveEvent(event) {
    const response = await fetch('/calendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
    if (response.ok) {
      // Füge das neue Event direkt zum events-Array hinzu
      events.update(existingEvents => [...existingEvents, event]);
      fetchEvents(); // Aktualisiere die Events
    } else {
      console.error('Fehler beim Speichern des Ereignisses:', response.statusText);
    }
  }

  async function deleteEvent(eventId) {
    const response = await fetch(`/calendar/${eventId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchEvents(); // Nach dem Löschen, aktualisiere die Events
    } else {
      console.error('Fehler beim Löschen des Ereignisses:', response.statusText);
    }
  }

  onMount(fetchEvents); // Beim Laden der Seite, lade die Events

</script>

<Calendar {events} on:eventDropped={saveEvent} on:eventDeleted={deleteEvent} />
