const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","favicon1.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-e9333c80.js","imports":["_app/immutable/start-e9333c80.js","_app/immutable/chunks/index-e20c4d4a.js","_app/immutable/chunks/singletons-b96fff73.js","_app/immutable/chunks/index-9dea4bd4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-d1dafbd1.js'),
			() => import('./chunks/1-43181488.js'),
			() => import('./chunks/2-b54ddd31.js')
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
