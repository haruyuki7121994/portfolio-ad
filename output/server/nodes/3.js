import * as universal from '../entries/pages/templates/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/templates/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/templates/+page.js";
export const imports = ["_app/immutable/nodes/3.187eee5b.js","_app/immutable/chunks/store.6b019bdc.js","_app/immutable/chunks/scheduler.c5d8ddd9.js","_app/immutable/chunks/index.3d639d7e.js","_app/immutable/chunks/index.4ffe20b2.js","_app/immutable/chunks/loader.ad580657.js"];
export const stylesheets = ["_app/immutable/assets/loader.73721d46.css"];
export const fonts = [];
