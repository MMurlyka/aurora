workbox.setConfig({
	debug: true,
});

const { registerRoute } = workbox.routing;
const { NetworkFirst } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;
const networkTimeoutSeconds = 0.3;
const cacheName = 'Api';

registerRoute(
	new RegExp('https://jqhtg290ee.execute-api.eu-west-3.amazonaws.com/'),
	new NetworkFirst({
		networkTimeoutSeconds,
		cacheName,
		plugins: [
			new CacheableResponse({ statuses: [0, 200] })
		]
	})
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
