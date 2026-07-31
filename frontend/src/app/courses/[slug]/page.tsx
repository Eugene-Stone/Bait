import type { Metadata } from 'next';
// import { getPageBySlug } from '@/api/APIs';
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

export async function getPageBySlug(slug: string) {
	const query = buildQuery({
		populate: {
			seo: {
				populate: {
					ogImage: true,
				},
			},
			image: {
				populate: '*',
			},
			direction: true,
			level: true,
			formats: true,
		},
	});

	const response = await fetch(
		// `${BACKEND_URL}/api/courses?filters[slug][$eq]=${slug}&populate[seo][populate][ogImage]=true&populate[image]=true`,
		`${BACKEND_URL}/api/courses?filters[slug][$eq]=${slug}&${query}`,
		{
			cache: 'no-store', // Отключение кеша
			// next: { revalidate: 60 },
		},
	);

	// console.log(query);

	if (!response.ok) {
		throw new Error('Failed to fetch home page data');
	}

	const result = await response.json();

	// Если бэкенд вернул пустой массив — вызываем 404
	if (!result.data || result.data.length === 0) {
		notFound();
	}

	return result;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const dataPage = await getPageBySlug(slug);

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

export default async function PageBySlug({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const user = await getMe();

	const dataPage = await getPageBySlug(slug);
	const page: Course = dataPage.data?.[0];

	if (!page) {
		notFound();
	}

	const { title, image, text } = page;
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

				<ul className="nw-comments-list">
					<li className="nw-comment-item">
						<div className="nw-comment-meta">
							<span className="nw-comment-author">UserTest</span>
							<span className="nw-comment-date">15 июля 2026, 17:06</span>
						</div>
						<p className="nw-comment-text">Новый Отзыв</p>
					</li>
				</ul>

				{user ? (
					<div className="nw-comments-area">
						<div className="nw-comment-form-wrapper">
							<h4 className="nw-widget-title">Оставить комментарий</h4>
							<form className="nw-comment-form">
								<div className="nw-comment-field-group">
									<label className="nw-comment-label" htmlFor="comment-message">
										Ваш комментарий *
									</label>
									<textarea
										name="comment"
										className="nw-comment-textarea"
										id="comment-message"
										defaultValue={''}
									/>
								</div>
								<div style={{ display: 'flex', gap: 10 }}>
									<button className="nw-comment-submit-button" type="submit">
										Отправить
									</button>
									<button
										className="nw-comment-submit-button cancel"
										type="button">
										Отмена
									</button>
								</div>
							</form>
						</div>
					</div>
				) : (
					<div className="reviews__leave-notice">
						<p>
							Чтобы задать вопрос или оставить комментарий,{' '}
							<Link href="/login">авторизируйтесь</Link> или{' '}
							<Link href="/registration">зарегистрируйтесь</Link> на&nbsp;сайте.
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
