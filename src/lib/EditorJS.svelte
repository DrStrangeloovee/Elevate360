<script>
    import Checklist from '@editorjs/checklist';
    import EditorJS from '@editorjs/editorjs';
    import Header from '@editorjs/header';
    import ImageTool from '@editorjs/image';
    import LinkTool from '@editorjs/link';
    import List from '@editorjs/list';
    import Paragraph from '@editorjs/paragraph';

    let editorJsNode;

    $effect(() => {
        const editor = new EditorJS({
            autofocus: true,
            holder: editorJsNode,
            inlineToolbar: true,
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
            }
        });
    });
</script>

<div bind:this={editorJsNode} class="border"></div>
