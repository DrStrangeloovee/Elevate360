<script>
    import EditorJs from '$lib/EditorJS.svelte';
    import NoteList from '$lib/NoteList.svelte';
    let { data } = $props();

    $effect(() => {
        console.log(data);
    });
</script>

<div class="col-8 offset-2">
    <NoteList notes={data.notes}></NoteList>
    <h1>Note name</h1>
    <!--<EditorJs></EditorJs>-->
</div>
