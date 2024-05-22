<script>
    let { notes } = $props();
</script>

<ul>
    {#each notes as note}
        <li>{note.title}</li>
    {/each}
</ul>
