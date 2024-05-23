<script>
    import EditorJS from '@editorjs/editorjs';
    import Checklist from '@editorjs/checklist';
    import Header from '@editorjs/header';
    import ImageTool from '@editorjs/image';
    import LinkTool from '@editorjs/link';
    import List from '@editorjs/list';
    import Paragraph from '@editorjs/paragraph';

    const defaultNoteData = {
        title: 'Test'
    };

    let { noteData = defaultNoteData } = $props();

    let isEditingTitle = $state(false);
    let titleInputNode;

    function handleTitleEdit(params) {
        isEditingTitle = true;
        titleInputNode.focus();
        // TODO: handle saving of input
    }

    function editorjs(node) {
        const editor = new EditorJS({
            holder: node,
            autofocus: true,
            inlineToolbar: true,
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

        // Initialize conent when ready
        /* TODO: check if needed
        editor.isReady
            .then(() => {
                editor.render(content);
            })
            .catch((ex) => {
                console.log('ERROR:', ex);
            });
        */

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
                class:visually-hidden={!isEditingTitle}
                type="text"
                bind:value={noteData.title}
                bind:this={titleInputNode}
                onblur={() => (isEditingTitle = false)}
            />
            <button
                id="titleEditButton"
                type="button"
                class="btn btn-lg"
                onclick={handleTitleEdit}
                class:visually-hidden-focusable={isEditingTitle}>{noteData.title}</button
            >
        </div>
        <div class="card-body mt-1">
            <div use:editorjs></div>
        </div>
        <div class="card-footer text-body-secondary text-center">2 days ago</div>
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
