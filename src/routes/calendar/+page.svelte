<script>
    import Calendar from '$lib/Calendar.svelte';

    let { data } = $props();

    $effect(() => {
        console.log(data);
    });

</script>