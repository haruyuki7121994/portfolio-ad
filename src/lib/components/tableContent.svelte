<script>
    import {hiddenTableContent} from '$lib/store.js'
</script>
<style>
    aside.svelte-1qfvy0d.svelte-1qfvy0d {
        max-width: 280px;
        position: fixed;
        top: 50%;
        right: 8px;
        translate: 0% -50%;
        z-index: 10
    }

    .sidebar-toggle.svelte-1qfvy0d.svelte-1qfvy0d, .table-of-contents.svelte-1qfvy0d.svelte-1qfvy0d {
        padding: 24px;
        background-color: hsl(210 7% 11%);
        border-top: 1px solid hsl(0 0% 19%);
        border-left: 1px solid hsl(0 0% 19%);
        border-radius: 20px;
        box-shadow: 0px 0px 4px 4px hsl(0 0% 0% / 4%);
    }

    .table-of-contents.svelte-1qfvy0d.svelte-1qfvy0d {
        counter-reset: section
    }

    .table-of-contents-title.svelte-1qfvy0d.svelte-1qfvy0d {
        font-size: 16px;
        line-height: clamp(32px,6vw,48px);
        text-transform: uppercase;
        color: hsl(0 0% 98%);
        font-weight: bold;
    }
</style>
<aside class="svelte-1qfvy0d">
    <section>
        <button class="sidebar-toggle svelte-1qfvy0d" aria-label="Show table of contents" style=""
                hidden={$hiddenTableContent} on:click={() => hiddenTableContent.set(!$hiddenTableContent)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="white"
                 fill="none" width="24" height="24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"></path>
            </svg>
        </button>
        <div class="table-of-contents svelte-1qfvy0d" style="" hidden={!$hiddenTableContent} >
            <button aria-label="Hide table of contents" class="svelte-1qfvy0d" on:click={() => hiddenTableContent.set(!$hiddenTableContent)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="white"
                     fill="none" width="24" height="24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path>
                </svg>
            </button>
            <h2 class="table-of-contents-title svelte-1qfvy0d">Table of contents</h2>
            <slot/>
        </div>
    </section>
</aside>