import CourseOverlayProvider from '@/components/courses/CourseOverlayContext';
import CourseList from '@/components/courses/CoursesList';
import CoursesSidebar from '@/components/courses/CoursesSidebar';
import Pagination from '@/components/courses/Pagination';
import Preloader from '@/components/layout/Preloader';
import { BACKEND_URL } from '@/constants';
import { Meta } from '@/types';
import { buildQuery } from '@/utils/buildQuery';
import { Course } from '@backend-types/course';
import { Metadata } from 'next';
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

					<CourseOverlayProvider>
						<div className="nw-blog-grid">
							<CoursesSidebar />

							<CourseList courses={courses} />
						</div>
						<Pagination pageSize={pageSize} pagination={meta.pagination} />
					</CourseOverlayProvider>
				</div>
			</section>
		</Suspense>
	);
}
