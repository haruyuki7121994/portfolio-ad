

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.870005c5.js","_app/immutable/chunks/scheduler.c5d8ddd9.js","_app/immutable/chunks/index.3d639d7e.js","_app/immutable/chunks/store.6b019bdc.js","_app/immutable/chunks/index.4ffe20b2.js","_app/immutable/chunks/NotificationComponent.5f82f524.js"];
export const stylesheets = ["_app/immutable/assets/NotificationComponent.0030e0f6.css"];
export const fonts = [];
