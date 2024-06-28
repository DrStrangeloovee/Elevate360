<script>
    import EditorJS from '@editorjs/editorjs';
    import Checklist from '@editorjs/checklist';
    import Header from '@editorjs/header';
    import ImageTool from '@editorjs/image';
    import LinkTool from '@editorjs/link';
    import List from '@editorjs/list';
    import Paragraph from '@editorjs/paragraph';
    import { onMount } from 'svelte';

    const defaultNoteData = {
        id: null,
        title: `My note from ${new Date().toLocaleDateString(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}`
    };

    // Set content of note/default content
    let { noteData = defaultNoteData } = $props();
    let titleInputNode;
    let editorInitialized = false;
    let editorInstance = $state();
    let isEditingTitle = $state(false);
    let savePromise = $state(Promise.resolve([]));

    function handleTitleEdit() {
        isEditingTitle = true;
        titleInputNode.focus();
    }

    function saveTitle() {
        if (noteData.title) {
            savePromise = saveNote();
            console.log('saving title');
        } else {
            noteData.title = defaultNoteData.title;
        }
        isEditingTitle = false;
    }

    async function saveNote() {
        editorInstance
            .save()
            .then((outputData) => {
                const response = fetch('/note/save', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: noteData.id,
                        title: noteData.title,
                        content: outputData
                    })
                });
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    }

    function editorjs(node) {
        editorInstance = new EditorJS({
            holder: node,
            autofocus: true,
            inlineToolbar: true,
            onReady: () => {
                editorInitialized = true;
            },
            onChange: (api, event) => {
                saveNote();
            },
            // Initialize tools
            tools: {
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                header: {
                    class: Header,
                    config: {
                        placeholder: 'Enter a header',
                        levels: [1, 2, 3, 4, 5, 6]
                    }
                },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            // TODO: implement upload byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                            // TODO: implement upload byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by Url
                        }
                    }
                },
                linkTool: {
                    class: LinkTool,
                    config: {
                        // TODO: implement endpoint: 'http://localhost:8008/fetchUrl' // Your backend endpoint for url data fetching,
                    }
                }
            },
            // Render note contents
            data: noteData.content
        });

        // TODO: check if needed - otherwise remove whole return block as it is not necessary
        return {
            update() {},
            destroy() {}
        };
    }
</script>

<div class="col-8 offset-2">
    <div class="card">
        <div class="card-header text-center pb-3">
            <input
                id="titleInput"
                class="form-control form-control-lg"
                class:is-invalid={noteData.title.length < 1}
                class:visually-hidden={!isEditingTitle}
                type="text"
                bind:value={noteData.title}
                bind:this={titleInputNode}
                onblur={() => saveTitle()}
            />
            <button
                id="titleEditButton"
                type="button"
                class="btn btn-lg"
                onclick={handleTitleEdit}
                class:visually-hidden-focusable={isEditingTitle}>{noteData.title}</button
            >
            <div class="invalid-feedback">Please enter a non empty title!</div>
        </div>
        <div class="card-body mt-1">
            <div use:editorjs></div>
        </div>
        <div class="card-footer text-body-secondary text-end">
            {#await savePromise}
                Saving note <i class="bi bi-arrow-repeat text-warning"></i>
            {:then response}
                Note saved succesfully!<i class="bi bi-check2-circle text-success"></i>
            {:catch error}
                <button type="button" class="btn btn-sm btn-danger"
                    >Failed saving note! Try again.<i class="bi bi-x-octagon"></i></button
                >
            {/await}
        </div>
    </div>
</div>

<style>
    #titleInput {
        text-align: center;
    }

    #titleEditButton {
        transition: none;
    }

    #titleEditButton:active {
        border: none;
    }
</style>
