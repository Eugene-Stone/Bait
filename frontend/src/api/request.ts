import NotFound from '@/app/not-found';
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

	const response = await fetch(`http://localhost:1337/api/homepage?${query}`, {
		cache: 'no-store', // Отключение кеша
		// next: { revalidate: 60 },
	});

	if (response.status === 404) {
		NotFound();
	}

	if (!response.ok) {
		throw new Error('Failed to fetch home page data');
	}

	return response.json();
}
