import type { Core } from '@strapi/strapi';

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
						url: `${process.env.FRONTEND}`,
					},
					published: {
						url: `${process.env.FRONTEND}`,
					},
				},
				{
					uid: 'api::page.page',
					draft: {
						url: `${process.env.FRONTEND}/{slug}`,
					},
					published: {
						url: `${process.env.FRONTEND}/{slug}`,
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
