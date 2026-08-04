import type { Metadata } from 'next';
import type { LayoutSeo } from '@backend-types/layoutSeo';
import { BACKEND_URL, SITE_TITLE } from '@/constants';
import DynamicSections from '@/components/sections/DynamicSections';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Course } from '@backend-types/course';
import RichText from '@/utils/RichText';
import { imageSrcSet } from '@/utils/imageSrcSet';
import Image from 'next/image';
import { buildQuery } from '@/utils/buildQuery';
import { formatDate } from '@/utils/formatDate';
import { getMe } from '@/api/auth-server';
import { getCourseBySlug } from '@/api/APIs';
import Comment from '@/components/Comment';
import CommentForm from '@/components/Comment/CommentForm';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const dataPage = await getCourseBySlug(slug);

	const page = dataPage.data?.[0];

	if (!page) {
		notFound();
	}

	const pageTitle = dataPage.data[0].title;
	const seo: LayoutSeo = dataPage?.data[0]?.seo || {};

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

export default async function CourseBySlug({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const user = await getMe();

	const dataPage = await getCourseBySlug(slug);
	const page: Course = dataPage.data?.[0];

	if (!page) {
		notFound();
	}

	const { title, image, text, comments } = page;
	const { srcSetString } = imageSrcSet(page.image);

	return (
		<section className="nw-blog-section">
			<article className="nw-post-container">
				<header className="nw-post-header">
					<div className="nw-post-meta">
						Опубликовано: {formatDate(page.createdAt!)} • {page.direction?.title}
					</div>
					<h1 className="nw-post-title">{title}</h1>
				</header>
				<div className="nw-post-main-img-wrapper">
					{page.image && (
						<picture>
							<source
								srcSet={srcSetString}
								sizes="
							(min-width: 768px) 718px,
							100vw
						"
							/>
							<Image
								className="nw-post-main-img"
								width={image?.width}
								height={image?.height}
								alt={image?.alternativeText || ''}
								src={BACKEND_URL + image?.url}
							/>
						</picture>
					)}
				</div>

				<RichText className="nw-post-body">{text}</RichText>

				<h3 className="nw-comments-title">Обсуждение курса</h3>
				{comments && (
					<ul className="nw-comments-list">
						{comments.map((comment, i) => {
							if (comment.isApproved) {
								return <Comment key={i} user={user} comment={comment} />;
							}
						})}
					</ul>
				)}

				{user ? (
					<CommentForm user={user} course={page} />
				) : (
					<div className="reviews__leave-notice">
						<p>
							Чтобы задать вопрос или оставить комментарий,{' '}
							{/* Символ # в query-параметрах отсекается браузером как хэш текущего URL, если его не закодировать. Нужно завернуть значение callbackUrl в encodeURIComponent: */}
							<Link
								href={`/login?callbackUrl=${encodeURIComponent(`/courses/${slug}#comment-form-area`)}`}>
								авторизируйтесь
							</Link>{' '}
							или <Link href="/registration">зарегистрируйтесь</Link> на&nbsp;сайте.
						</p>
					</div>
				)}

				<footer className="nw-post-footer">
					<Link className="nw-post-back-link" href="/courses">
						← Назад ко всем курсам
					</Link>
				</footer>
			</article>
		</section>
	);
}
