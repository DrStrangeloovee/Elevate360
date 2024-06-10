
<script>
    import Calendar from "$lib/Calendar.svelte";
    export let initialEvents;
    export let initialTasks;

</script>
<Calendar {initialEvents} {initialTasks}></Calendar>

<footer>
    <p>&copy; 2024 </p>
  </footer>