<script>
    import NoteList from '$lib/NoteList.svelte';

    let { data } = $props();

    let greetingTime = new Date().getHours();

    $effect(() => {
        console.log(data);
        console.log(greetingTime);
    });
</script>

<div class="col-4 offset-2">
    <h3>
        Good {#if greetingTime >= 5 && greetingTime <= 12}
            morning
        {:else if greetingTime > 12 && greetingTime <= 17}
            afternoon
        {:else}
            evening
        {/if}
        {data.user.name}!
    </h3>
</div>
<hr />
<div class="col-4 offset-2">
    <NoteList notes={data.notes}></NoteList>
    <!--<EditorJs></EditorJs>-->
</div>

