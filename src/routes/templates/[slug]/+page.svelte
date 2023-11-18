<script>
    import Sidebar from './sidebar.svelte'
    import {getTemplate, getTemplateByCodesReturnMap, updateContent} from "$lib/api.js";
    import {loader} from "$lib/loading/loader.js";
    import {writable} from "svelte/store";
    import EditContentPopup from "./editContentPopup.svelte";
    import EditLinkTosPopup from "./editLinkTosPopup.svelte";
    import ViewPopup from "./viewPopup.svelte";
    import EditorPage from "./editorPage.svelte";
    import {onMount} from "svelte";
    import { hiddenDrawer, hiddenLinkTosDrawer, hiddenViewJsonDrawer } from '$lib/store.js'
    import TableContent from '$lib/components/tableContent.svelte'

    export let data
    let loading = writable(true);
    let loadHead = data.loadHead
    let template = data.template
    let htmlContent = ""
    const id = template.id

    onMount(() => {
        loadHtmlContent(template)
        loadPartials(data.partials)
        if (data.useFinalContent) {
            loadFinalContent(data.partials)
        }
        removeEmptyParameters()
        loading.update(n => !n);
    })

    async function reloadApi() {
        loading.update(n => !n);
        const reloaded = await getTemplate(id)
        template = {...reloaded}
        loadHtmlContent(template)

        let useFinalContent = false
        let partialTemplates = {};
        let partialCodes = []
        if (template.partial) {
            partialCodes = partialCodes.concat(Object.values(template.loadingPartialCodes))
        }
        if (template.childrenCodes) {
            partialCodes = partialCodes.concat(Object.values(template.childrenCodes))
            useFinalContent = true
        }
        if (template.loadingHeadCodes) {
            partialCodes = partialCodes.concat(Object.values(template.loadingHeadCodes))
        }
        if (partialCodes.length > 0) {
            let attrStr = ""
            if (template.attrs) {
                for (const [key, value] of Object.entries(template.attrs)) {
                    attrStr += `${key}=${value}`
                }
            }
            partialTemplates = await getTemplateByCodesReturnMap(
                partialCodes.join(","),
                attrStr,
                useFinalContent
            )
            loadPartials(partialTemplates)
        }
        // if (template.partial) {
        //     const partialCodes = template.loadingPartialCodes
        //     if (partialCodes) {
        //         const codes = Object.values(partialCodes)
        //         console.log(codes)
        //         let attrStr = ""
        //         if (template.attrs) {
        //             for (const [key, value] of Object.entries(template.attrs)) {
        //                 attrStr += `${key}=${value}`
        //             }
        //         }
        //         partialTemplates = await getTemplateByCodesReturnMap(codes.join(","), attrStr, true)
        //     }
        //     loadPartials(partialTemplates)
        // }
        if (data.useFinalContent) {
            loadFinalContent(data.partials)
        }
        removeEmptyParameters()
        loading.update(n => !n);
    }

    async function updateTemplate() {
        await updateContent(template.id, {
            htmlContent: htmlContent,
            parameters: template.parameters,
            fields: template.fields,
        })
        await reloadApi()
    }

    function loadHtmlContent(t) {
        htmlContent = t.htmlContent
        const params = t.parameters
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                htmlContent = htmlContent.replaceAll(`{% ${key} %}`, value.value)
            }
            for (const [key, value] of Object.entries(template.linkTos)) {
                htmlContent = htmlContent.replaceAll(`{% linkTo.${key} %}`, `javascript:void(${value})`)
            }
        }
    }

    function loadPartials(partials) {
        if (partials) {
            for (const [key, value] of Object.entries(partials)) {
                const partialContent = value.htmlContent
                htmlContent = htmlContent.replace(`{% partials.${key} %}`, partialContent)
            }
        }
    }

    function loadFinalContent(partials) {
        if (partials) {
            for (const [key, value] of Object.entries(partials)) {
                const partialContent = value.finalContent
                htmlContent = htmlContent.replace(`{% children.${key} %}`, partialContent)
            }
        }
    }

    function removeEmptyParameters() {
        const partialCodes = template.loadingPartialCodes
        for (const [key, value] of Object.entries(partialCodes)) {
            htmlContent = htmlContent.replace(`{% partials.${value} %}`, '')
        }
    }

    async function changeContent(e) {
        htmlContent = e.detail.value
    }

</script>
<svelte:head>
    {@html loadHead}
</svelte:head>

<TableContent>
    <Sidebar canEdit={(template.type !== 'html')} useEditor={(template.editor)} on:reloadApi={reloadApi} on:updateTemplate={updateTemplate}
         on:showModal={(e) => {
             const actionName = e.detail.name
             switch (actionName) {
               case 'editContent': {
                   hiddenDrawer.set(!$hiddenDrawer)
                   return
               }
               case 'editLinkTos': {
                   hiddenLinkTosDrawer.set(!$hiddenLinkTosDrawer)
                   return
               }
               case 'view': {
                   hiddenViewJsonDrawer.set(!$hiddenViewJsonDrawer)
                   return;
               }
             }
         }}
    />
</TableContent>
{#if template.editor}
    <div use:loader={loading} class="overflow-hidden">
        <EditorPage
            htmlContent={htmlContent}
            on:changeContent={(e) => {changeContent(e)}}
        />
    </div>
{:else }
<div class="lg:flex lg:items-center w-full z-50" use:loader={loading}>
    <div class="w-full">
        {#key htmlContent}
            {@html htmlContent}
        {/key}
    </div>
</div>
{/if}

<EditContentPopup on:reloadApi={reloadApi} template={template}/>
<EditLinkTosPopup on:reloadApi={reloadApi} template={template}/>
<ViewPopup on:reloadApi={reloadApi} template={template}/>



