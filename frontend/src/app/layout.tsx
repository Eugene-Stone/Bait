import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ViewTransition } from 'react';
import ButtonScrollTop from '@/components/layout/ButtonScrollTop';
import ReloadToTop from '@/utils/ReloadToTop';
import { FRONTEND_URL, SITE_TITLE } from '@/constants';

import '../styles/style.scss';
import '../styles/dark.scss';

export const metadata: Metadata = {
	metadataBase: new URL(FRONTEND_URL),

	title: {
		default: 'БАЙТ | Школа программирования',
		template: `%s | ${SITE_TITLE}`,
	},

	description: 'Школа программирования БАЙТ. Обучаем Python, JavaScript и веб-разработке.',
	keywords: ['школа программирования', 'Python', 'JavaScript', 'веб-разработка'],
	icons: {
		icon: '/img/favicon.png',
	},
	// alternates: {
	// 	canonical: FRONTEND_URL,
	// },

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		title: SITE_TITLE,
		siteName: SITE_TITLE,
		type: 'website',
		locale: 'ru_RU',
		description: 'Школа программирования БАЙТ. Обучаем Python, JavaScript и веб-разработке.',
		images: [
			{
				url: '/images/logo.png',
				width: 1000,
				height: 500,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body>
				<div className="wrapper">
					{/* <ReloadToTop /> */}
					<Header />

					<div className="layout">
						<main className="page-wrap">
							{children}
							{/* <ViewTransition>{children}</ViewTransition> */}
						</main>
					</div>

					<Footer />
					<ButtonScrollTop />
				</div>
			</body>
		</html>
	);
}
