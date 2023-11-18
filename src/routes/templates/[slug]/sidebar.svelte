<script>
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
    <li><a href="/">Home</a></li>
    <li><a href="/templates">Templates</a></li>
    <li><a on:click={reloadApi} href="#">Reload</a></li>
    {#if canEdit}
        {#if useEditor}
            <li><a on:click={updateTemplate} href="#">Edit Template</a></li>
        {:else }
            <li><a on:click={() => showModal('editContent')} href="#">Edit Template</a></li>
            <li><a on:click={() => showModal('editLinkTos')} href="#">Edit Link</a></li>
        {/if}
    <li><a on:click={() => showModal('view')} href="#">View Json</a></li>
    {/if}
</ul>
