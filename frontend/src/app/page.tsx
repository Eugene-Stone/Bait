import { getHomePageData } from '@/api/request';
import DynamicSections from '@/components/sections/DynamicSections';

import { BACKEND_URL, FRONTEND_URL, SITE_TITLE } from '@/constants';
import { LayoutSeo } from '@backend-types/layoutSeo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const dataPage = await getHomePageData();

	const pageTitle = dataPage.data.title;
	const seo: LayoutSeo = dataPage?.data?.seo;
	console.log(pageTitle);
	console.log(seo);

	const {
		canonical,
		metaDescription,
		metaKeywords,
		metaTitle,
		nofollow,
		noindex,
		ogDescription,
		ogTitle,
		structuredData,
		ogImage,
	} = seo;

	const ogImageUrl = ogImage?.url ? `${BACKEND_URL}${ogImage.url}` : '/images/logo.png';

	return {
		title: metaTitle || pageTitle,
		description: metaDescription,
		keywords: metaKeywords,
		alternates: {
			canonical: canonical || '/',
		},
		robots: {
			index: !noindex,
			follow: !noindex,
		},
		openGraph: {
			title: ogTitle || metaTitle || pageTitle,
			siteName: SITE_TITLE,
			type: 'website',
			locale: 'ru_RU',
			description: ogDescription || metaDescription,
			images: [
				{
					url: ogImageUrl,
					width: ogImage?.width || 1000,
					height: ogImage?.height || 500,
				},
			],
		},
	};
}

export default async function Home() {
	const dataPage = await getHomePageData();
	const { sections }: { sections: any[] } = dataPage.data;

	return <>{sections && <DynamicSections sections={sections} />}</>;
}
