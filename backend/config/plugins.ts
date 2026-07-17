import type { Core } from '@strapi/strapi';
import { FRONTEND_URL } from '../src/CONSTANTS';

const allowedMediaTypes = [
	'image/*',
	'video/*',
	'audio/*',
	'application/pdf',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.*',
	'text/plain',
	'text/csv',
];

const deniedExecutableTypes = [
	'application/vnd.microsoft.portable-executable',
	'application/x-msdownload',
	'application/x-msdos-program',
	'application/x-executable',
	'application/x-dosexec',
	'application/x-sh',
	'text/x-shellscript',
	'application/x-mach-binary',
];

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
	'users-permissions': {
		config: {
			jwtManagement: 'refresh',
			sessions: {
				httpOnly: true,
			},
		},
	},
	upload: {
		config: {
			security: {
				allowedTypes: allowedMediaTypes,
				deniedTypes: deniedExecutableTypes,
			},
		},
	},
	seo: {
		enabled: true,
	},
	'strapi-dz-component-duplicator': {
		enabled: true,
	},
	'preview-button': {
		config: {
			enabled: true,
			contentTypes: [
				{
					uid: 'api::homepage.homepage',
					draft: {
						url: `${FRONTEND_URL}`,
					},
					published: {
						url: `${FRONTEND_URL}`,
					},
				},
				{
					uid: 'api::page.page',
					draft: {
						// url: 'https://eugene-stone.github.io/NordWood/{slug}',
						url: `${FRONTEND_URL}{slug}`,
					},
					published: {
						// url: 'https://eugene-stone.github.io/NordWood/{slug}',
						url: `${FRONTEND_URL}{slug}`,
					},
				},
				// {
				// 	uid: 'api::post.post',
				// 	draft: {
				// 		url: 'http://localhost:3000/api/preview',
				// 		query: {
				// 			type: 'post',
				// 			slug: '{slug}',
				// 		},
				// 	},
				// 	published: {
				// 		url: 'http://localhost:3000/blog/{slug}',
				// 	},
				// },
			],
		},
	},
});

export default config;
