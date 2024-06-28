<script>
    import EditorJS from '$lib/EditorJS.svelte';

    let { data } = $props();
    console.log('note data', data);
</script>

<EditorJS noteData={data.note}></EditorJS>
