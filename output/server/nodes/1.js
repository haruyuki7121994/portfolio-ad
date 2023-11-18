

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ee549f1a.js","_app/immutable/chunks/scheduler.c5d8ddd9.js","_app/immutable/chunks/index.3d639d7e.js","_app/immutable/chunks/stores.8efe8026.js","_app/immutable/chunks/singletons.c510984e.js","_app/immutable/chunks/index.4ffe20b2.js"];
export const stylesheets = [];
export const fonts = [];
