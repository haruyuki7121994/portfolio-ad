import { writable } from 'svelte/store'

export const templateTypes = ["html", "css", "js"]
export let defaultTemplateTableCriteria = {
    partial: false,
    types: ["html"]
}

export let api = writable("http://localhost:8080")
export let notification = writable({
    message: "",
    status: "hidden",
    time: 5,
    clearInterval: false
})
export let hiddenDrawer = writable(true)
export let hiddenLinkTosDrawer = writable(true)
export let hiddenTableContent = writable(true)
export let hiddenViewJsonDrawer = writable(true)

export const updateNotification = (status, message, clearInterval = false) => {
    notification.set({
        message: message,
        status: status,
        time: 5,
        clearInterval: clearInterval
    })
}

export const updateSuccessNotification = (message) => {
    notification.set({
        message: message,
        status: "success",
        time: 5,
        clearInterval: false
    })
}