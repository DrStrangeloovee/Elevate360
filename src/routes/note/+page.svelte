<script>
    import EditorJS from '$lib/EditorJS.svelte';

    let { data } = $props();
</script>

<EditorJS content={data.note.content}></EditorJS>
