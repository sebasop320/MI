const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","favicon1.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-c35cf7a5.js","imports":["_app/immutable/start-c35cf7a5.js","_app/immutable/chunks/index-b794c41a.js","_app/immutable/chunks/singletons-466ac005.js","_app/immutable/chunks/index-b796acae.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-d006834b.js'),
			() => import('./chunks/1-f3cb5515.js'),
			() => import('./chunks/2-b47fa2a8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
