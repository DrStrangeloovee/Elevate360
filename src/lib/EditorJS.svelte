<script>
    import EditorJS from '@editorjs/editorjs';
    import Checklist from '@editorjs/checklist';
    import Header from '@editorjs/header';
    import ImageTool from '@editorjs/image';
    import LinkTool from '@editorjs/link';
    import List from '@editorjs/list';
    import Paragraph from '@editorjs/paragraph';

    let { content = {} } = $props();

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
            data: content
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
        <div class="card-header text-center"><h4>Featured</h4></div>
        <div class="card-body p-0">
            <div use:editorjs></div>
        </div>
        <div class="card-footer text-body-secondary text-center">2 days ago</div>
    </div>
</div>
