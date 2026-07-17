import type { StrapiApp } from '@strapi/strapi/admin';
import { SITE } from '../CONSTANTS';

import './app.css';

export default {
	config: {
		locales: [
			// 'ru'
		],
	},
	bootstrap(app: StrapiApp) {
		console.log(app);

		const init = () => {
			const logo = document.querySelector('img[alt="Application logo"]');

			if (!logo) {
				requestAnimationFrame(init);
				return;
			}

			const container = logo.closest('div[class]')?.parentElement;
			if (!container) return;

			container.title = `Open - ${SITE.name}`;
			container.style.cursor = 'pointer';
			container.addEventListener('click', () => {
				window.open(SITE.url, '_blank', 'noopener,noreferrer');
			});
		};

		init();
	},
};
