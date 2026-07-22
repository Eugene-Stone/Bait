import { Metadata } from 'next';
import { getPageBySlug } from '@/api/request';
import { LayoutSeo } from '@backend-types/layoutSeo';
import { BACKEND_URL, SITE_TITLE } from '@/constants';
import DynamicSections from '@/components/sections/DynamicSections';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const dataPage = await getPageBySlug(slug);

	const pageTitle = dataPage.data[0].title;
	const seo: LayoutSeo = dataPage?.data[0]?.seo;

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
			canonical: canonical || slug,
		},
		robots: {
			index: !noindex,
			follow: !nofollow,
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

export default async function PageBySlug({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const dataPage = await getPageBySlug(slug);
	const { sections }: { sections: any[] } = dataPage.data[0];

	return (
		<>
			<h1>{slug}</h1>
			{sections && <DynamicSections sections={sections} />}
		</>
	);
}
