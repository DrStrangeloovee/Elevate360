<script>
    let { notes } = $props();
</script>

<div class="card">
    <h5 class="card-header">
        Your notes
        <span class="badge text-bg-secondary float-end">{notes.length}</span>
    </h5>
    <div class="card-body">
        {#if notes.length > 0}
            <ul class="list-group list-group-flush pt-3">
                {#each notes as note, i}
                    <a href="/note?id={note.id}" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5>
                                <strong>{i + 1}. </strong>
                                {note.title}
                            </h5>
                        </div>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <small class="text-body-secondary"
                                    >Last edited: {note.updated}</small
                                >
                            </li>
                            <li class="list-inline-item">
                                <small class="text-body-secondary">Created at: {note.created}</small
                                >
                            </li>
                        </ul>
                    </a>
                {/each}
            </ul>
        {:else}
            <p class="lead text-center text-body-secondary">
                <small>You haven't created any notes yet!</small>
            </p>
        {/if}
        <hr />
        <a href="/note/new" class="btn btn-primary float-end"
            ><i class="bi bi-file-earmark-plus border-end pe-2 me-1"></i> Create a new note
        </a>
    </div>
</div>
