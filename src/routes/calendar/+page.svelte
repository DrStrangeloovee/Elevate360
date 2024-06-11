
<script>
  import Calendar from '$lib/calendar.svelte';

  let { events } = $props();
</script>
  
  <Calendar {events} on:eventDropped={handleEventDropped}></Calendar>
  