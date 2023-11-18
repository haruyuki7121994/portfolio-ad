import * as universal from '../entries/pages/templates/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/templates/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/templates/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.3b8200bd.js","_app/immutable/chunks/loader.ad580657.js","_app/immutable/chunks/scheduler.c5d8ddd9.js","_app/immutable/chunks/store.6b019bdc.js","_app/immutable/chunks/index.3d639d7e.js","_app/immutable/chunks/index.4ffe20b2.js","_app/immutable/chunks/NotificationComponent.5f82f524.js"];
export const stylesheets = ["_app/immutable/assets/4.d5ca9168.css","_app/immutable/assets/loader.73721d46.css","_app/immutable/assets/NotificationComponent.0030e0f6.css"];
export const fonts = [];
