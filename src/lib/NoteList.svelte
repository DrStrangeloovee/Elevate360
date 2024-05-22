<script>
    let { notes } = $props();
</script>

<div class="card">
    <h5 class="card-header">
        Your notes
        <div class="float-end">
            <span class="badge text-bg-secondary">{notes.length}</span>
        </div>
    </h5>
    <div class="card-body">
        <a href="#" class="btn btn-primary"
            ><i class="bi bi-file-earmark-plus border-end pe-2 me-1"></i> Create a new note
        </a>
        <ul class="list-group list-group-flush pt-3">
            {#each notes as note, i}
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5>
                            <strong>{i + 1}. </strong>
                            {note.title}
                        </h5>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <small class="text-body-secondary">Last edited: {note.updated}</small>
                        </li>
                        <li class="list-inline-item">
                            <small class="text-body-secondary">Created at: {note.created}</small>
                        </li>
                    </ul>
                </a>
            {/each}
        </ul>
    </div>
</div>
