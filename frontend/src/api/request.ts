import { notFound } from 'next/navigation';
import { BACKEND_URL } from '@/constants';
import { buildQuery } from '@/utils/buildQuery';

export async function getHomePageData() {
	const query = buildQuery({
		populate: {
			seo: {
				populate: {
					ogImage: true,
				},
			},
			sections: {
				on: {
					'sections.about': { populate: '*' },
					'sections.gallery': {
						populate: {
							gallery: {
								populate: {
									images: true,
								},
							},
						},
					},
					'sections.hero': { populate: '*' },
					'sections.request': {
						populate: {
							form: {
								populate: {
									fields: {
										on: {
											'forms.form-checkboxes': { populate: '*' },
											'forms.form-input': { populate: '*' },
											'forms.form-select': { populate: '*' },
											'forms.form-submit': { populate: '*' },
											'forms.form-textarea': { populate: '*' },
											'forms.form-agree': { populate: '*' },
										},
									},
								},
							},
						},
					},
					'sections.reviews': { populate: '*' },
					'sections.schedule': { populate: '*' },
					'sections.service': { populate: '*' },
					'sections.text-section': { populate: '*' },
				},
			},
		},
	});

	const response = await fetch(`${BACKEND_URL}/api/homepage?${query}`, {
		cache: 'no-store', // Отключение кеша
		// next: { revalidate: 60 },
	});

	if (response.status === 404) {
		notFound();
	}

	if (!response.ok) {
		throw new Error('Failed to fetch home page data');
	}

	return response.json();
}

export async function getPageBySlug(slug: string) {
	const response = await fetch(`${BACKEND_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`, {
		cache: 'no-store', // Отключение кеша
		// next: { revalidate: 60 },
	});

	if (response.status === 404) {
		notFound();
	}

	if (!response.ok) {
		throw new Error('Failed to fetch home page data');
	}

	return response.json();
}

export async function getFooterData() {
	const response = await fetch(`${BACKEND_URL}/api/footer?populate=*`, {
		next: { revalidate: 60 },
	});

	if (!response.ok) {
		throw new Error('Failed to fetch home page data');
	}

	return response.json();
}

export async function getFooterMenu() {
	const response = await fetch(
		`${BACKEND_URL}/api/navigation/render/footer-navigation?type=TREE&locale=ru`,
		{
			next: { revalidate: 60 },
		},
	);
	if (!response.ok) {
		throw new Error('Failed to fetch home page data');
	}

	return response.json();
}

export async function getHeaderData() {
	const response = await fetch(`${BACKEND_URL}/api/header?populate=*`, {
		next: { revalidate: 60 },
	});

	if (!response.ok) {
		throw new Error('Failed to fetch home page data');
	}

	return response.json();
}

export async function getHeaderMenu() {
	const response = await fetch(
		`${BACKEND_URL}/api/navigation/render/header-navigation?type=TREE&locale=ru`,
		{
			next: { revalidate: 60 },
		},
	);
	if (!response.ok) {
		throw new Error('Failed to fetch home page data');
	}

	return response.json();
}
