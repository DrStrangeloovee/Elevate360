
<script>
  import { createContext, setContext, onMount } from 'svelte';

  const myContext = createContext();

  export let initialEvents = [];
  export let initialTasks = [];

  let today = new Date(2024, 0); // Startdatum: Januar 2024
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  let events = initialEvents;
  let tasks = initialTasks;

  setContext(myContext, { events, tasks });

  function nextMonth() {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) currentYear++;
    updateCalendar();
  }

  function previousMonth() {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) currentYear--;
    updateCalendar();
  }

  function updateCalendar() {
    setContext(myContext, { events, tasks });
  }

  function addTask(dayIndex) {
    const task = prompt("Today's Task:");
    if (task !== null && task !== "") {
      tasks[dayIndex] = [...(tasks[dayIndex] || []), task];
      updateCalendar();
    }
  }
  addTask();

  function deleteTask(dayIndex, taskIndex) {
    tasks[dayIndex].splice(taskIndex, 1);
    updateCalendar();
  }
  deleteTask();

  onMount(() => {
    updateCalendar();
  });

  function generateCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();


    const weeks = [];
    let day = 1;
    for (let i = 0; i < (startDay > 0 ? 6 : 5); i++) {
      weeks[i] = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDay) || day > daysInMonth) {
          weeks[i][j] = null;
        } else {
          weeks[i][j] = day;
          day++;
        }
      }
    }
    return weeks;
  }

  generateCalendar();

  function getMonthName(month) {
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    return months[month];
  }
</script>

<div class="calendar-container">
  <div class="calendar-header">
    <button on:click={previousMonth}>&lt;</button>
    <h1>{getMonthName(currentMonth)} {currentYear}</h1>
    <button on:click={nextMonth}>&gt;</button>
  </div>

  {#each week as weekDays, weekIndex}
    <div key={weekIndex}>
      <table class="calendar-table">
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
          {#each weekDays as day, dayIndex}
            <tr key={dayIndex}>
              {#each day as date, dateIndex}
                <td key={dateIndex}>
                  {#if date !== null}
                    <div>{date}</div>
                    {#if tasks[dayIndex] && tasks[dayIndex].length > 0}
                      <div class="task-count">{tasks[dayIndex].length}</div>
                    {/if}
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/each}
</div>

<style>
  .calendar-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .calendar-header {
    text-align: center;
    margin-bottom: 20px;
  }

  .calendar-header button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin: 0 10px;
  }

  .calendar-header h1 {
    display: inline;
    font-size: 24px;
    margin: 0;
  }

  .calendar-table {
    width: 100%;
    border-collapse: collapse;
  }

  .calendar-table th, .calendar-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }

  .calendar-table td {
    position: relative;
  }

  .task-count {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: #ff5722;
    color: #fff;
    padding: 4px 8px;
    border-radius: 50%;
    font-size: 12px;
  }
</style>
