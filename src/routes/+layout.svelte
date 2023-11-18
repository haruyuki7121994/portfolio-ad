<script>
    import "../app.css";
    import Footer from './footer.svelte'
    import Header from './header.svelte'
    import { page } from '$app/stores'
</script>

<div class="layout">
    {#if !$page.url.pathname.includes("/templates/")}
        <!-- Header -->
        <Header />
    {/if}

    <main>
        <!-- Black hole for other content -->
        <slot />
    </main>

    <!-- Footer -->
<!--    <Footer />-->
</div>