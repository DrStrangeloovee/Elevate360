<script>
    import NoteList from '$lib/NoteList.svelte';

    let { data } = $props();

    $effect(() => {
        console.log(data);
    });
</script>

<div class="col-4 offset-2">
    <NoteList notes={data.notes}></NoteList>
    <!--<EditorJs></EditorJs>-->
</div>
