import {defaultTemplateTableCriteria} from "$lib/store.js";

export async function load() {
    return {
        criteria: defaultTemplateTableCriteria
    }
}