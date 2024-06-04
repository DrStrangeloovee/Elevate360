
<script>
  import { onMount } from 'svelte';

  // Funktion zum Erstellen eines Monatsnamens
  function getMonthName(month) {
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    return months[month];
  }

  export let events = [];

  let today = new Date(2024, 0); // Startdatum: Januar 2024
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  let tasks = [];

  // Funktion zum Hinzufügen einer Aufgabe
  function addTask(dayIndex) {
    const task = prompt("Bitte geben Sie die Aufgabe ein:");
    if (task !== null && task !== "") {
      tasks[dayIndex].push(task);
    }
  }

  // Funktion zum Löschen einer Aufgabe
  function deleteTask(dayIndex, taskIndex) {
    tasks[dayIndex].splice(taskIndex, 1);
  }

  // Funktion zum Blättern zum nächsten Monat
  function nextMonth() {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) currentYear++; // Wenn Dezember, erhöhe das Jahr
  }

  // Funktion zum Blättern zum vorherigen Monat
  function previousMonth() {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) currentYear--; // Wenn Januar, verringere das Jahr
  }

  // Funktion zum Generieren des Kalenders für den aktuellen Monat und das aktuelle Jahr
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
            events: events.filter(e => e.date.getDate() === day && e.date.getMonth() === month && e.date.getFullYear() === year)
          };
          day++;
        }
      }
    }
    return weeks;
  }

  // Beispielhafte Kalenderdaten
  let calendarData = generateCalendar(currentMonth, currentYear);

  onMount(() => {
    // Initialisiere die Aufgabenliste für jeden Tag
    tasks = Array.from({ length: calendarData.length }, () => []);
  });
</script>

<div>
  <button on:click={previousMonth}>Previous</button>
  <h1>{getMonthName(currentMonth)} {currentYear}</h1>
  <button on:click={nextMonth}>Next</button>
</div>

{#each calendarData as week, weekIndex}
  <div key={weekIndex}>
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
        {#each week as day, dayIndex}
          <tr key={dayIndex}>
            {#each day as cell, cellIndex}
              <td key={cellIndex}>
                {#if cell}
                  <div>{cell.date}</div>
                  {#each cell.events as event, eventIndex}
                    <div key={eventIndex}>{event}</div>
                  {/each}
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/each}

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
</style>
