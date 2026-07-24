import CoursesSidebar from '@/components/layout/Courses/CoursesSidebar';
import Pagination from '@/components/layout/Courses/Pagination';
import Preloader from '@/components/layout/Preloader';
import { BACKEND_URL } from '@/constants';
import { Meta } from '@/types';
import { buildQuery } from '@/utils/buildQuery';
import { imageSrcSet } from '@/utils/imageSrcSet';
import { Course } from '@backend-types/course';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Наши курсы',
	};
}

async function getPageData(params: {
	search?: string;
	sort?: string;
	page?: string;
	direction?: string | string[];
	level?: string | string[];
}) {
	// console.log(params.level);

	const filtersDirectionActive = Array.isArray(params.direction)
		? params.direction
		: params.direction
			? [params.direction]
			: [];
	const filtersLevelActive = Array.isArray(params.level)
		? params.level
		: params.level
			? [params.level]
			: [];
	const searchQuery = params.search || '';
	const sorting = params.sort || 'createdAt:desc';
	const pageCurrent = params.page || '1';
	const pageSize = 2;

	/* 
	Строка такого вида сохраняется в params
	http://localhost:3000/courses?level=s-nulya&level=prodolzhayushhie

	В таком виде отправляется в бекенд запрос
	http://localhost:1337/api/courses?filters[level][slug][$in][0]=s-nulya&filters[level][slug][$in][1]=prodolzhayushhie
	*/

	const queryPage = buildQuery({
		filters: {
			// Фильтра
			direction: {
				slug: {
					// Множество фильтров в массиве
					$in: filtersDirectionActive,
				},
			},
			level: {
				slug: {
					// Множество фильтров в массиве
					$in: filtersLevelActive,
				},
			},
			// Поиск
			title: {
				$containsi: searchQuery,
			},
		},
		// Сортировка
		sort: [sorting],
		// Пагинация
		pagination: {
			page: pageCurrent,
			pageSize: pageSize,
		},
		populate: '*',
	});

	const response = await fetch(`${BACKEND_URL}/api/courses?${queryPage}`, {
		cache: 'no-store', // Отключение кеша
		// next: { revalidate: 60 },
	});

	if (response.status === 404) {
		notFound();
	}

	if (!response.ok) {
		throw new Error('Failed to fetch page data');
	}

	// return response.json(),

	const dataPage = await response.json();

	return {
		dataPage,
		pageSize,
	};
}

export default async function Courses({
	searchParams,
}: {
	searchParams: Promise<{
		search?: string;
		sort?: string;
		page?: string;
		direction?: string;
		level?: string;
	}>;
}) {
	const params = await searchParams;
	const { dataPage, pageSize } = await getPageData(params);

	const { data: courses, meta }: { data: Course[]; meta: Meta } = dataPage;

	console.log('params', params);
	// console.log(courses);
	// console.log(meta.pagination);

	return (
		<Suspense fallback={<Preloader />}>
			<section className="nw-blog-section">
				<div className="nw-blog-container">
					<h2 className="nw-auth-title">Наши курсы</h2>

					<div className="nw-blog-grid">
						<CoursesSidebar />

						<main className="nw-articles-grid">
							{courses.map((course, i) => {
								const imageFormats = course.image && imageSrcSet(course.image);
								const srcSetString = imageFormats
									?.map(
										(format) => `${BACKEND_URL}${format.url} ${format.width}w`,
									)
									.join(', ');
								return (
									<article key={i} className="nw-article-card">
										<Link
											className="nw-article-img-wrapper"
											href={`courses/${course.slug}`}>
											<picture>
												<source
													srcSet={srcSetString}
													sizes="
													(min-width: 1200px) 420px,
													(min-width: 992px) 33vw,
													(min-width: 640px) 50vw,
													100vw
												"
												/>
												{course.image && (
													<Image
														className="nw-article-img"
														alt={course.title ? course.title : ''}
														width={course.image?.width}
														height={course.image?.height}
														src={BACKEND_URL + course.image?.url}
													/>
												)}
											</picture>
										</Link>
										<div className="nw-article-content">
											<div
												className="nw-article-meta"
												style={{ marginTop: 12 }}>
												<span
													style={{
														color: '#000',
														background: '#FFD700',
														padding: '4px 8px',
														fontWeight: 900,
														fontSize: 16,
													}}>
													{course.price} грн
												</span>
												<span style={{ marginLeft: 12, fontSize: 13 }}>
													• {course.duration} •{' '}
													{course?.formats?.map((format, i) =>
														i === 0 ? format.title : '/' + format.title,
													)}
												</span>
											</div>

											{course?.formats?.map((f, i) => f.title + `, `)}
											<br />
											{course.direction?.title}
											<br />
											{course.level?.title}

											<h3 className="nw-article-card-title">
												<Link href={`courses/${course.slug}`}>
													{course.title}
												</Link>
											</h3>
											<p className="nw-article-excerpt">
												{course.description}
											</p>
											<a className="nw-article-more" href="/courses/course">
												Подробнее о курсе
											</a>
										</div>
									</article>
								);
							})}
						</main>
					</div>
					<Pagination pageSize={pageSize} pagination={meta.pagination} />
				</div>
			</section>
		</Suspense>
	);
}
