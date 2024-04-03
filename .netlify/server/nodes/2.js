

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ncn-xeN-.js","_app/immutable/chunks/scheduler.inlQyDiC.js","_app/immutable/chunks/index.BTFgxvk4.js","_app/immutable/chunks/index.Dypd5i6a.js"];
export const stylesheets = [];
export const fonts = [];
