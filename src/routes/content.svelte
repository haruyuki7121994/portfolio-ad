<script>
    import {Section} from 'flowbite-svelte-blocks';
    import {Label, Input, Button} from 'flowbite-svelte';
    import {getCookie, setCookie} from "$lib/cookie.js";
    import {api, updateSuccessNotification} from "$lib/store.js";
    import {onMount} from "svelte";
    import Notification from "$lib/components/NotificationComponent.svelte";

    async function onSubmit(e) {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value
        }
        setCookie("api", data['api'], 999)
        api.set(data['api'])
        updateSuccessNotification("Add Successfully.")
    }
    let domain;
    onMount(() => {
        domain = getCookie("api")
        if (!domain) {
            domain = $api
        }
    })
</script>
<Notification/>
<Section name="crudcreateform">
    <form on:submit|preventDefault={onSubmit}>
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
                <Label for="name" class="mb-2">Api</Label>
                <Input type="text" id="name" placeholder="Api domain" name="api" value={domain} required/>
            </div>
            <Button type="submit" class="w-32">Add</Button>
        </div>
    </form>
</Section>