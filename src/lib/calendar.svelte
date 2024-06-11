<script>
    import { onMount } from 'svelte';
    import { Calendar } from '@fullcalendar/core';
    import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import { createEventDispatcher } from 'svelte';
  
    let { events } = $props();
  
    const dispatch = createEventDispatcher();
  
    onMount(() => {
      let containerEl = document.getElementById('external-events');
      let calendarEl = document.getElementById('calendar');
      let checkbox = document.getElementById('drop-remove');
  
      new Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function(eventEl) {
          return {
            title: eventEl.innerText
          };
        }
      });
  
      let calendar = new Calendar(calendarEl, {
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        droppable: true,
        events: events,
        drop: function(info) {
          if (checkbox.checked) {
            info.draggedEl.parentNode.removeChild(info.draggedEl);
          }
          const newEvent = {
            title: info.draggedEl.innerText,
            start: info.dateStr
          };
          dispatch('eventDropped', newEvent);
        }
      });
  
      calendar.render();
    });
  </script>
  
  
  <style>
    /*body {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
      font-size: 14px;
    }
  */
    #external-events {
      position: fixed;
      z-index: 2;
      top: 20px;
      left: 20px;
      width: 150px;
      padding: 0 10px;
      border: 1px solid #ccc;
      background: #eee;
    }
  
    #external-events .fc-event {
      cursor: move;
      margin: 3px 0;
    }
  
    #calendar-container {
      position: relative;
      z-index: 1;
      margin-left: 200px;
    }
  
    #calendar {
      max-width: 1100px;
      margin: 20px auto;
    }
  </style>
  
  <div id="external-events">
    <p>
      <strong>Draggable Events</strong>
    </p>
  
    <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div class="fc-event-main">My Event 1</div>
    </div>
    <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div class="fc-event-main">My Event 2</div>
    </div>
    <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div class="fc-event-main">My Event 3</div>
    </div>
    <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div class="fc-event-main">My Event 4</div>
    </div>
    <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div class="fc-event-main">My Event 5</div>
    </div>
  
    <p>
      <input type="checkbox" id="drop-remove" />
      <label for="drop-remove">remove after drop</label>
    </p>
  </div>
  
  <div id="calendar-container">
    <div id="calendar"></div>
  </div>
  