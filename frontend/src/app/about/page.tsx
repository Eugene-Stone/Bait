import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'О школе',
	description: 'Узнайте больше о школе программирования БАЙТ.',
	keywords: ['школа программирования', 'Python', 'JavaScript', 'веб-разработка'],
	alternates: {
		canonical: '/about',
	},

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

export default function About() {
	return <div style={{ color: '#fff' }}>About page</div>;
}
