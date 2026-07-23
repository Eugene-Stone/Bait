import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
	'strapi::logger',
	'strapi::errors',
	// 'strapi::security',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'script-src-elem': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	'strapi::cors',
	'strapi::poweredBy',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
	'global::inject-frontend-url', // Включает создание ссылки на фронтенд из .env
];

export default config;
