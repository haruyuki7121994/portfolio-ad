import {get} from 'svelte/store'
import {api} from "$lib/store.js";

const endpointObj = {
    search: `%domain/api/template/search?page=%page`,
    detail: `%domain/api/template/%slug/details`,
    getByCodesReturnMap: `%domain/api/template/details/_by_codes?codes=%codes&attrs=%attrs&finalContent=%finalContent`,
    updateHeader: `%domain/api/template/%slug/update/_header`,
    updateContent: `%domain/api/template/%slug/update/_content`,
    updateLinkTos: `%domain/api/template/%slug/update/_linkTos`,
}

export async function searchTemplates(data, page) {

    const endpoint = endpointObj.search
        .replace("%domain", get(api))
        .replace("%page", page ?? "0")

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('ngrok-skip-browser-warning', '69420');

    let body = {}
    if (data) {
        body = {...data}
    }

    return await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    }).catch((e) => {
        return {content: []}
    })
}

export async function getTemplate(slug) {
    const endpoint = endpointObj.detail
        .replace("%domain", get(api))
        .replace("%slug", slug)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('ngrok-skip-browser-warning', '69420');

    const res = await fetch(endpoint, {
        method: 'GET',
        headers: headers
    })

    return await res.json()
}

export async function getTemplateByCodesReturnMap(codes, attrStr, useFinalContent = false) {
    const endpoint = endpointObj.getByCodesReturnMap
        .replace("%domain", get(api))
        .replace("%codes", codes)
        .replace("%attrs", attrStr)
        .replace("%finalContent", useFinalContent)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('ngrok-skip-browser-warning', '69420');

    const res = await fetch(endpoint, {
        method: 'GET',
        headers: headers
    })

    return  await res.json()
}

export async function updateContent(slug, data) {
    const endpoint = endpointObj.updateContent
        .replace("%domain", get(api))
        .replace("%slug", slug)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('ngrok-skip-browser-warning', '69420');

    const res = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })

    const template = await res.json()
    return {template}
}

export async function updateLinkTos(slug, data) {
    const endpoint = endpointObj.updateLinkTos
        .replace("%domain", get(api))
        .replace("%slug", slug)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('ngrok-skip-browser-warning', '69420');

    const res = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })

    const template = await res.json()
    return {template}
}