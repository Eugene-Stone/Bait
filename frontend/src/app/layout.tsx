import type { Metadata } from 'next';
import '../styles/style.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ViewTransition } from 'react';
import ButtonScrollTop from '@/components/layout/ButtonScrollTop';
import ReloadToTop from '@/utils/ReloadToTop';
import { FRONTEND_URL } from '@/constants';

export const metadata: Metadata = {
	metadataBase: new URL(FRONTEND_URL),

	title: {
		default: 'БАЙТ | Школа программирования',
		template: '%s | БАЙТ',
	},

	description: 'Школа программирования БАЙТ. Обучаем Python, JavaScript и веб-разработке.',
	keywords: ['школа программирования', 'Python', 'JavaScript', 'веб-разработка'],

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		siteName: 'БАЙТ',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
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
		<html lang="en">
			<body>
				<div className="wrapper">
					{/* <ReloadToTop /> */}
					<Header />

					<div className="layout">
						<main className="page-wrap">
							<ViewTransition>{children}</ViewTransition>
						</main>
					</div>

					<Footer />
					<ButtonScrollTop />
				</div>
			</body>
		</html>
	);
}
