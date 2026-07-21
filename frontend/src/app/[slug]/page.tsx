import { getPageBySlug } from '@/api/request';

export default async function PageBySlug({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const pageData = await getPageBySlug(slug);

	return (
		<>
			<h1>{slug}</h1>
		</>
	);
}
