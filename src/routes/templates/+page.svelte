<script>
    import {searchTemplates} from "$lib/api.js";
    import Table from "$lib/components/Table.svelte";
    import TablePaging from "$lib/components/TablePaging.svelte";
    import {templateTypes} from "$lib/store.js";
    import {loader} from "$lib/loading/loader.js";
    import {writable} from "svelte/store";
    import {Dropdown, Checkbox, Button, DropdownItem} from "flowbite-svelte";
    import {ChevronDownSolid, FilterSolid} from "flowbite-svelte-icons";

    export let data
    let loading = writable(false);
    let criteria = data.criteria
    let page = 0

    const tableHeader = [
        "Name",
        "Code",
        "Type",
        "Created At",
        "Partial",
        "",
    ]
    let meta = {};

    let handleChangeFilter = (key, value) => {
        criteria[key] = value
    }

    let handleChangeTypes = (key, value) => {
        handleChangeFilter(key, [value])
    }

    function load() {
        loading.update(n => !n);
        criteria = {...criteria}
        loading.update(n => !n);
    }

    function changePage(e) {
        page = e.detail.page
    }
</script>
<div class="container px-4 mx-auto sm:px-8">
    <div class="py-8">
        <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 class="text-2xl leading-tight">
                Templates
            </h2>
            <div class="text-end">
                <form class="flex flex-col justify-center space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    <!--                    <div class=" relative ">-->
                    <!--                        <input type="text" id="&quot;form-subscribe-Filter"-->
                    <!--                               class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"-->
                    <!--                               placeholder="Search free text"/>-->
                    <!--                    </div>-->
                    <Button color='alternative'>
                        <FilterSolid class="w-3 h-3"/>
                    </Button>
                    <Dropdown class="w-48 p-3 space-y-2 text-sm">
                        {#each Object.entries(criteria) as [key, value]}
                            {#if typeof value == "boolean"}
                                <li>
                                    <Checkbox checked={value}
                                              on:change={(e) => {handleChangeFilter(key, e.target.checked)}}>{key}</Checkbox>
                                </li>
                            {/if}
                        {/each}
                    </Dropdown>
                    <Button color='alternative'>Types
                        <ChevronDownSolid class="w-3 h-3 ml-2 "/>
                    </Button>
                    <Dropdown class="w-44 divide-y divide-gray-100">
                        {#each templateTypes as type}
                            <DropdownItem
                                    on:click={(e) => {console.log(e);handleChangeTypes("types", e.target.innerHTML)}}>{type}</DropdownItem>
                        {/each}
                    </Dropdown>
                    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                            type="submit"
                            on:click={() => load()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">

        </div>
        <div class="px-4 py-4 -mx-4 sm:-mx-8 sm:px-8" use:loader={loading}>
            {#each Object.entries(criteria) as [key, value]}
            <span class="px-4 py-2 mx-2  text-base text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 ">
                {key}: {value}
            </span>
            {/each}

        </div>
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8" use:loader={loading}>
            {#await searchTemplates(criteria, page)}
                <tr>
                    <td colspan="6" class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div class="flex items-center">
                            <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    Loading...
                                </p>
                            </div>
                        </div>
                    </td>
                </tr>
            {:then templates}
                <Table header={tableHeader}>
                    {#each templates.content as template}
                        <tr>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {template.name}
                                </p>
                            </td>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {template.code}
                                </p>
                            </td>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {template.extFilename}
                                </p>
                            </td>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {template.createdAt}
                                </p>
                            </td>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                {#if template.partial}
                            <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span aria-hidden="true"
                                      class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                </span>
                            </span>
                                {:else }
                            <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                <span aria-hidden="true"
                                      class="absolute inset-0 bg-red-200 rounded-full opacity-50">
                                </span>
                            </span>
                                {/if}
                            </td>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <a href={`/templates/${template.id}`} class="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    {/each}
                </Table>
                <TablePaging meta={templates.page} on:changePage={(e) => {changePage(e)}}/>
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}
        </div>
    </div>
</div>
