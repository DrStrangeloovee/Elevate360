<script>
  import { onMount } from 'svelte';
  import { Calendar } from '@fullcalendar/core';
  import interactionPlugin from '@fullcalendar/interaction';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';

  let events = [];
  let calendar;

  onMount(() => {
    let calendarEl = document.getElementById('calendar');
    calendar = new Calendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true, // Erlaubt das Verschieben und Ändern der Events per Drag & Drop
      selectable: true, // Erlaubt das Auswählen eines Zeitbereichs
      select: handleDateSelect, // Event-Handler für die Auswahl eines Zeitbereichs
      events: events,
    });

    calendar.render();
  });

  // Funktion, um ein neues Event hinzuzufügen
  function handleDateSelect(info) {
    let title = prompt('Event Title:');
    if (title) {
      let newEvent = {
        title: title,
        start: info.startStr,
        end: info.endStr // Endzeit des Events, falls relevant
      };
      events = [...events, newEvent]; // Event zur Liste hinzufügen
      calendar.addEvent(newEvent); // Event direkt im Kalender hinzufügen
    }
  }
</script>

<style>
  #calendar {
    max-width: 1100px;
    margin: 20px auto;
  }
</style>

<div id="calendar"></div>
