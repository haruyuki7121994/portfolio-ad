export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["3.jpg","9.jpg","favicon.png","rocket.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.48627eb6.js","app":"_app/immutable/entry/app.0eaae8b1.js","imports":["_app/immutable/entry/start.48627eb6.js","_app/immutable/chunks/scheduler.c5d8ddd9.js","_app/immutable/chunks/singletons.c510984e.js","_app/immutable/chunks/index.4ffe20b2.js","_app/immutable/entry/app.0eaae8b1.js","_app/immutable/chunks/scheduler.c5d8ddd9.js","_app/immutable/chunks/index.3d639d7e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/templates",
				pattern: /^\/templates\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/templates/[slug]",
				pattern: /^\/templates\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
