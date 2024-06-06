<script context="module">
    export { load } from './page.js'; 
</script>
  
<script>
    export let events = []; 
    import Calendar from '$lib/Calendar.svelte'; 
</script>
  
  <Calendar {events} />
  