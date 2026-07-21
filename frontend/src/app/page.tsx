import { getHomePageData } from '@/api/request';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Hero from '@/components/sections/Hero';
import Request from '@/components/sections/Request';
import Reviews from '@/components/sections/Reviews';
import Schedule from '@/components/sections/Schedule';
import Service from '@/components/sections/Service';
import TextSection from '@/components/sections/TextSection';
import { BACKEND_URL } from '@/constants';
import { LayoutSeo } from '@backend-types/layoutSeo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const dataPage = await getHomePageData();
	const seo: LayoutSeo | undefined = dataPage?.data?.seo;

	const ogImageUrl = seo?.ogImage?.url ? `${BACKEND_URL}${seo.ogImage.url}` : './icon.png';

	return {
		title: seo?.metaTitle,
		description: seo?.metaDescription,
		keywords: seo?.metaKeywords,
		alternates: {
			canonical: seo?.canonical,
		},
		robots: {
			index: !seo?.noindex,
			follow: !seo?.noindex,
		},
		openGraph: {
			title: seo?.ogTitle || seo?.metaTitle,
			description: seo?.ogDescription || seo?.metaDescription,
			images: [
				{
					url: ogImageUrl,
					width: seo?.ogImage?.width || 1200,
					height: seo?.ogImage?.height || 630,
				},
			],
		},
	};
}

// 2. Основной компонент страницы
export default async function Home() {
	const dataPage = await getHomePageData();
	const { sections }: { sections: any[] } = dataPage.data;

	return (
		<>
			{sections.map((sect: any, i: number) => {
				switch (sect.__component) {
					case 'sections.about':
						return <About key={i} data={sect} />;
					case 'sections.gallery':
						return <Gallery key={i} data={sect} />;
					case 'sections.hero':
						return <Hero key={i} data={sect} />;
					case 'sections.request':
						return <Request key={i} data={sect} />;
					case 'sections.reviews':
						return <Reviews key={i} data={sect} />;
					case 'sections.schedule':
						return <Schedule key={i} data={sect} />;
					case 'sections.service':
						return <Service key={i} data={sect} />;
					case 'sections.text-section':
						return <TextSection key={i} data={sect} />;
					default:
						return null;
				}
			})}
		</>
	);
}
