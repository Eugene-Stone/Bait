import type { Metadata, Viewport } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ButtonScrollTop from '@/components/layout/ButtonScrollTop';
import ReloadToTop from '@/utils/ReloadToTop';
import { FRONTEND_URL, SITE_TITLE } from '@/constants';

import LoadingContextProvider from '@/context/LoadingContext';
import ThemeContextProvider from '@/context/ThemeContext';
import '../styles/style.scss';
import '../styles/dark.scss';

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL(FRONTEND_URL),

	title: {
		default: 'БАЙТ | Школа программирования',
		template: `%s | ${SITE_TITLE}`,
	},

	description: 'Школа программирования БАЙТ. Обучаем Python, JavaScript и веб-разработке.',
	keywords: ['школа программирования', 'Python', 'JavaScript', 'веб-разработка'],
	icons: {
		icon: '/images/favicon.png',
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

const themeInitializerScript = `
   (function() {
      try {
         var stored = localStorage.getItem('isDark');
         var isDark = stored ? JSON.parse(stored) : false;
         var root = document.documentElement;
         root.classList.add(isDark ? 'is-dark' : 'is-light');
         root.classList.remove(isDark ? 'is-light' : 'is-dark');
      } catch (e) {}
   })();
`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// suppressHydrationWarning - позволяет атрибутам элемента <html> изменяться внешними скриптами (до гидратации) и их не нужно сверять.
		<html lang="ru" data-scroll-behavior="smooth" suppressHydrationWarning>
			<head>
				<script
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: themeInitializerScript,
					}}
				/>
			</head>
			<body>
				<ThemeContextProvider>
					<div className="wrapper">
						{/* <ReloadToTop /> */}
						<Header />

						<LoadingContextProvider className="layout">
							<main className="page-wrap">
								{children}
								{/* <ViewTransition>{children}</ViewTransition> */}
							</main>
						</LoadingContextProvider>

						<Footer />
						<ButtonScrollTop />
					</div>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
