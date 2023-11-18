<script>
    export let header
</script>

<div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
    <table class="min-w-full leading-normal">
        <thead>
        <tr>
            {#each header as name}
                <th scope="col"
                    class="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    {name}
                </th>
            {/each}
        </tr>
        </thead>
        <tbody>
        <slot />
        </tbody>
    </table>
</div>