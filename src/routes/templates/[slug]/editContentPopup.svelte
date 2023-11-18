<script>
    import {updateContent} from "$lib/api.js";
    import Editor from '@tinymce/tinymce-svelte';
    import {Button, Drawer} from "flowbite-svelte";
    import {sineIn} from 'svelte/easing';
    import {hiddenDrawer, updateSuccessNotification} from '$lib/store.js'
    import {createEventDispatcher} from "svelte";
    import Notification from "$lib/components/NotificationComponent.svelte";

    export let template

    const dispatch = createEventDispatcher();
    let params = template.parameters
    let htmlContent = ""
    if (params.content) {
        htmlContent = params.content.value
    }

    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };

    let conf = {
        menubar: false,
        height: "300px"
    }

    function reloadApi() {
        dispatch('reloadApi');
    }

    async function onSubmit(e) {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = {...params[key], value: value}
        }
        await updateContent(template.id, {
            htmlContent: template.htmlContent,
            parameters: {...data},
            fields: template.fields,
        })
        params = {...data}
        hiddenDrawer.set(true)
        reloadApi()
        updateSuccessNotification("Update Successfully.")
    }

    const paramEntriesSorted = Object.keys(params).sort((a, b) => {
        return params[a].id - params[b].id
    })

    let handlerChangeEditor = (event) => {
        htmlContent = event.detail.editor.getContent().replace("<p>", "<br>").replace("</p>", "")
    }

    let handlerChangeImage = (data) => {
        const key = data.key
        document.getElementById(key).src = data.image
    }
</script>
<Notification/>
<Drawer class="w-[700px]" transitionType="fly" {transitionParams} hidden={$hiddenDrawer === true} activateClickOutside={false} id="sidebar4">
    <form action="#" class="mb-6" on:submit|preventDefault={onSubmit}>
        <div class="flex items-center">
            <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Template</h5>
        </div>
        {#each paramEntriesSorted as key}
            {#if params[key].type === "textarea"}
                <div class="col-span-2">
                    <div class="py-3 relative">
                        {@html
                            `<Label for="form-${params[key].key}" class="block mb-2">${params[key].name}</Label>`
                        }
                        <Editor
                                {conf}
                                apiKey="gogaa28ubjnm57h7vfteo9pod8j45tjfsdolci468lpp2m7v"
                                value={params[key].value}
                                on:change={handlerChangeEditor}
                        />
                        <input type="text" hidden name={params[key].key} value={htmlContent}>
                    </div>
                </div>
            {:else if params[key].type === "image_url"}
                <div class="col-span-2">
                    <div class="py-3 relative">
                        {@html
                            `<Label class="block mb-2">Preview</Label>`
                        }
                        <a href="javascript:void(0);" class="relative block">
                            <img alt="profile" src={params[key].value} id={`preview${params[key].key}`}
                                 class="params[key]-cover rounded-lg h-40 w-40 "/>
                        </a>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="py-3 relative">
                        {@html
                            `<Label for="form-${params[key].key}" class="block mb-2">${params[key].name}</Label>`
                        }
                        <input class="rounded-lg border-transparent flex-1 appearance-none border-2 border-solid border-[#eee] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                               placeholder={params[key].name} value={params[key].value} name={params[key].key} type="text"
                               id={params[key].key}
                               on:change={(e) => {
                                   handlerChangeImage({key: `preview${params[key].key}`, image: e.srcElement.value})}
                               }
                        />
                    </div>
                </div>
            {:else }
                <div class="col-span-2">
                    <div class="py-3 relative">
                        {@html
                            `<Label for="form-${params[key].key}" class="block mb-2">${params[key].name}</Label>`
                        }
                        <input class="rounded-lg border-transparent flex-1 appearance-none border-2 border-solid border-[#eee] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                               placeholder={params[key].name} value={params[key].value} name={params[key].key} type={params[key].type}
                               id={params[key].key}/>
                    </div>
                </div>
            {/if}
        {/each}
        <div class="pt-5 flex justify-center w-full pb-4 space-x-4 md:px-4">
            <Button type="submit" class="w-full">Update</Button>
            <Button class="w-full" color="light" on:click={() => hiddenDrawer.set(true)}>
                <svg aria-hidden="true" class="w-5 h-5 -ml-1 sm:mr-1" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                Cancel
            </Button>
        </div>
    </form>
</Drawer>