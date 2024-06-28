
<script>
  import Calendar from '$lib/calendar.svelte';
  import { onMount } from 'svelte';

  export let events = [];

  async function fetchEvents() {
    const response = await fetch('/calendar');
    if (response.ok) {
      const data = await response.json();
      events = data.events;
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
      fetchEvents();
    } else {
      console.error('Fehler beim Speichern des Ereignisses:', response.statusText);
    }
  }

  function handleEventDropped(event) {
    saveEvent(event);
  }

  onMount(fetchEvents);
</script>

<Calendar {events} on:eventDropped={handleEventDropped} />
