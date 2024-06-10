
<script>
  export let initialEvents = [];

  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  let newEvent = {
      date: '',
      appointment: {
          name: 'string',
          description: 'string',
          location: 'string'
      }
  };

  async function saveEvent() {
      const response = await fetch('api/calendar', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newEvent)
      });

      if (response.ok) {
          const createdEvent = await response.json();
          initialEvents = [...initialEvents, createdEvent];
      }
  }

  function generateCalendar(month, year) {
      let daysInMonth = new Date(year, month + 1, 0).getDate();
      let startDay = new Date(year, month, 1).getDay();
      let weeks = [];
      let day = 1;
      for (let i = 0; i < (startDay > 0 ? 6 : 5); i++) {
          weeks[i] = [];
          for (let j = 0; j < 7; j++) {
              if ((i === 0 && j < startDay) || day > daysInMonth) {
                  weeks[i][j] = null;
              } else {
                  weeks[i][j] = {
                      date: day,
                      events: initialEvents.filter(e => new Date(e.date).getDate() === day && new Date(e.date).getMonth() === month && new Date(e.date).getFullYear() === year)
                  };
                  day++;
              }
          }
      }
      return weeks;
  }
</script>


<div>
  <form on:submit|preventDefault={saveEvent}>
      <input type="date" bind:value={newEvent.date} />
      <input type="text" placeholder="Name" bind:value={newEvent.appointment.name} />
      <input type="text" placeholder="Description" bind:value={newEvent.appointment.description} />
      <input type="text" placeholder="Location" bind:value={newEvent.appointment.location} />
      <button type="submit">Save Event</button>
  </form>
</div>

<div>
  <table>
      <thead>
          <tr>
              <th>Mo</th>
              <th>Di</th>
              <th>Mi</th>
              <th>Do</th>
              <th>Fr</th>
              <th>Sa</th>
              <th>So</th>
          </tr>
      </thead>
      <tbody>
          {#each generateCalendar(currentMonth, currentYear) as week}
              <tr>
                  {#each week as day}
                      <td>
                          {#if day}
                              <div>{day.date}</div>
                              {#each day.events as event}
                                  <div class="event">{event.appointment.name}</div>
                              {/each}
                          {/if}
                      </td>
                  {/each}
              </tr>
          {/each}
      </tbody>
  </table>
</div>


