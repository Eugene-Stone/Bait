import type { Metadata } from 'next';
import '../styles/style.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ViewTransition } from 'react';

export const metadata: Metadata = {
	metadataBase: new URL('https://site.com'),

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
					<Header />

					<div className="layout">
						<main className="page-wrap">
							<ViewTransition>{children}</ViewTransition>
						</main>
					</div>

					<Footer />
					<button className="scroll-to-top " />
				</div>
			</body>
		</html>
	);
}
