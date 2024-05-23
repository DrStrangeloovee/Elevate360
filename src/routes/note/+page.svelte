<script>
    import EditorJS from '$lib/EditorJS.svelte';

    let { data } = $props();
</script>

<EditorJS noteData={data.note}></EditorJS>
