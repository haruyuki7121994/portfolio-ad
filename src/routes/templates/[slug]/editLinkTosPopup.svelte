<script>
    import {updateLinkTos, searchTemplates} from "$lib/api.js";
    import {Button, Drawer} from "flowbite-svelte";
    import {sineIn} from 'svelte/easing';
    import {hiddenLinkTosDrawer, updateSuccessNotification} from '$lib/store.js'
    import {createEventDispatcher, onMount} from "svelte";
    import Notification from "$lib/components/NotificationComponent.svelte";

    export let template

    const dispatch = createEventDispatcher();
    const params = template.linkTos
    let fullPageTemplates = []

    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };

    onMount(async () => {
        const fullPageTemplateObj = await searchTemplates({partial: false})
        if (fullPageTemplateObj.content) {
            fullPageTemplates = fullPageTemplateObj.content
        }
    })

    function reloadApi() {
        dispatch('reloadApi');
    }

    async function onSubmit(e) {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value
        }
        await updateLinkTos(template.id, {
            linkTos: {...data},
        })
        hiddenLinkTosDrawer.set(true)
        reloadApi()
        updateSuccessNotification("Update Successfully.")
    }

</script>
<Notification/>
<Drawer class="w-[700px]" transitionType="fly" {transitionParams} hidden={$hiddenLinkTosDrawer === true} activateClickOutside={false} id="sidebar4">
    <form action="#" class="mb-6" on:submit|preventDefault={onSubmit}>
        <div class="flex items-center">
            <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Link Tos</h5>
        </div>
        {#each Object.entries(params) as [key, value]}
            <div class="col-span-2">
                <div class="py-3 relative">
                    {@html
                        `<Label for="form-${key}" class="block mb-2">${key}</Label>`
                    }
                    <select id={key} name={key} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        {#each fullPageTemplates as template}
                            <option selected={template.code === value} value={template.code}>{template.name}</option>
                        {/each}
                    </select>
                </div>
            </div>
        {/each}
        <div class="pt-5 flex justify-center w-full pb-4 space-x-4 md:px-4">
            <Button type="submit" class="w-full">Update</Button>
            <Button class="w-full" color="light" on:click={() => hiddenLinkTosDrawer.set(true)}>
                <svg aria-hidden="true" class="w-5 h-5 -ml-1 sm:mr-1" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                Cancel
            </Button>
        </div>
    </form>
</Drawer>