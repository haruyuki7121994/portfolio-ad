

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.681d45cf.js","_app/immutable/chunks/scheduler.c5d8ddd9.js","_app/immutable/chunks/index.3d639d7e.js","_app/immutable/chunks/stores.8efe8026.js","_app/immutable/chunks/singletons.c510984e.js","_app/immutable/chunks/index.4ffe20b2.js"];
export const stylesheets = ["_app/immutable/assets/0.848baf87.css"];
export const fonts = [];
