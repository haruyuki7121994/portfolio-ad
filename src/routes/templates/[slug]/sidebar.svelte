<script>
    import {base} from '$app/paths';
    import {createEventDispatcher} from 'svelte';

    export let canEdit;
    export let useEditor;

    const dispatch = createEventDispatcher();

    function reloadApi() {
        dispatch('reloadApi');
    }
    function updateTemplate() {
        dispatch('updateTemplate');
    }
    function showModal(name) {
        dispatch('showModal', {name: name});
    }
</script>
<style>
    ul {
        max-height: 400px;
    }

    li {
        margin-top: 16px;
        font-weight: 400;
        display: list-item;
        color: hsl(0 0% 98%);
    }
</style>
<ul>
    <li><a href={`${base}`}>Home</a></li>
    <li><a href={`${base}/templates`}>Templates</a></li>
    <li><button on:click={reloadApi}>Reload</button></li>
    {#if canEdit}
        {#if useEditor}
            <li><button on:click={updateTemplate}>Edit Template</button></li>
        {:else }
            <li><button on:click={() => showModal('editContent')}>Edit Template</button></li>
            <li><button on:click={() => showModal('editLinkTos')}>Edit Link</button></li>
        {/if}
    <li><button on:click={() => showModal('view')}>View Json</button></li>
    {/if}
</ul>
