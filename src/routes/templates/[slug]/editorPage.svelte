<script>
    import Editor from "@tinymce/tinymce-svelte";
    import HtmlFormatter from "$lib/formatter/HtmlFormatter.svelte";
    import {hiddenDrawer} from "$lib/store.js";
    import {createEventDispatcher} from "svelte";

    export let htmlContent

    const dispatch = createEventDispatcher();

    let toolbar = [
        "undo redo",
        "styles",
        "bold italic",
        "forecolor backcolor",
        "alignleft aligncenter alignright alignjustify",
        "bullist numlist outdent indent",
        "fontsize fontsizeinput fontfamily",
        "link image media"
    ]
    let conf = {
        menubar: true,
        min_height: 700,
        plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'wordcount'
        ],
        toolbar: toolbar.join(" | "),
        content_style: "body { margin: 1rem auto; max-width: 800px; } p {margin: 0}"
    }

    function changeContent(value) {
        dispatch('changeContent', {value: value});
    }

    let handlerChangeEditor = (event) => {
        htmlContent = event.detail.editor.getContent()
        changeContent(htmlContent)
    }
</script>

<Editor
        {conf}
        apiKey="gogaa28ubjnm57h7vfteo9pod8j45tjfsdolci468lpp2m7v"
        value={htmlContent}
        on:change={handlerChangeEditor}
/>
<!--<div>-->
<!--    <HtmlFormatter str={htmlContent} />-->
<!--</div>-->
