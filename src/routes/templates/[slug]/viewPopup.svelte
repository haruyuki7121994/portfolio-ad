<script>
    import {hiddenViewJsonDrawer, updateSuccessNotification} from "$lib/store.js";
    import {Button, Drawer, Label, Textarea} from "flowbite-svelte";
    import {sineIn} from "svelte/easing";
    import {Beautify, Debeautify} from "$lib/formatter/Beautify.js";
    import {createEventDispatcher, onMount} from "svelte";
    import {updateContent} from "$lib/api.js";
    import Notification from "$lib/components/NotificationComponent.svelte";

    export let template

    const dispatch = createEventDispatcher();
    let htmlContent = template.htmlContent

    $: if(mounted) {
        htmlContent = Beautify(htmlContent)
    }

    let mounted = false

    onMount(()=>{
        htmlContent = Beautify(htmlContent)
        mounted = true
    })

    let pre = null
    function SetPre(n){
        pre = n
    }

    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };

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
        let finalContent = Debeautify(data["description"])
        await updateContent(template.id, {
            htmlContent: finalContent,
            parameters: template.parameters,
            fields: template.fields,
        })
        htmlContent = finalContent
        hiddenViewJsonDrawer.set(true)
        reloadApi()
        updateSuccessNotification("Update Successfully.")
    }
</script>
<Notification/>
<Drawer class="w-[700px]" transitionType="fly" {transitionParams} hidden={$hiddenViewJsonDrawer === true} activateClickOutside={false} id="sidebar4">
    <form on:submit|preventDefault={onSubmit}>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div class="sm:col-span-2">
                <Label for="description" class="mb-2">Description</Label>
                <Textarea id="description" value={htmlContent} placeholder="Your description here" rows="30" name="description" required />
            </div>
        </div>
        <div class="pt-5 flex justify-center w-full pb-4 space-x-4 md:px-4">
            <Button type="submit" class="w-full">Update</Button>
            <Button class="w-full" color="light" on:click={() => hiddenViewJsonDrawer.set(true)}>
                <svg aria-hidden="true" class="w-5 h-5 -ml-1 sm:mr-1" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                Cancel
            </Button>
        </div>
    </form>
<!--    <HtmlFormatter str={htmlContent} />-->
</Drawer>