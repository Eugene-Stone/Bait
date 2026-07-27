'use client';

type Props = {
	filters: {
		directions: Direction[];
		levels: Level[];
	};
};
import { BACKEND_URL } from '@/constants';
import { useLoadingContext } from '@/context/LoadingContext';
import { Direction } from '@backend-types/direction';
import { Level } from '@backend-types/level';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const sortList = [
	{
		title: 'Сначала новые',
		value: 'createdAt:desc',
	},
	{
		title: 'Сначала старые',
		value: 'createdAt:asc',
	},
	{
		title: 'Сначала дешевле',
		value: 'price:asc',
	},
	{
		title: 'Сначала дороже',
		value: 'price:desc',
	},
];

export default function CoursesSidebar({ filters }: Props) {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const { startLoading } = useLoadingContext();

	const { directions, levels } = filters;

	// Инициализация состояний из URL
	const [search, setSearch] = useState(searchParams.get('search') || '');
	const sorting = searchParams.get('sort') || sortList[0].value;
	const directionsActive = searchParams.getAll('direction');
	const levelsActive = searchParams.getAll('level');

	// Функция обновления URL
	const updateQueryParams = (updates: Record<string, string | string[] | null>) => {
		const params = new URLSearchParams(searchParams.toString());

		// При изменении фильтров сбрасываем страницу на первую
		params.delete('page');

		Object.entries(updates).forEach(([key, value]) => {
			params.delete(key);

			if (Array.isArray(value)) {
				value.forEach((val) => {
					if (val) params.append(key, val);
				});
			} else if (value) {
				params.set(key, value);
			}
		});

		startLoading();
		router.push(`${pathname}?${params.toString()}`, {
			scroll: false,
		});
	};

	// Обработчик чекбоксов
	const handleCheckboxChange = (key: 'direction' | 'level', value: string, checked: boolean) => {
		const currentValues = key === 'direction' ? directionsActive : levelsActive;
		const updatedValues = checked
			? [...currentValues, value]
			: currentValues.filter((item) => item !== value);

		updateQueryParams({ [key]: updatedValues });
	};

	// Обработчик отправки формы поиска
	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateQueryParams({ search: search.trim() || null });
	};

	return (
		<aside className="nw-blog-sidebar">
			<div className="nw-widget">
				<h3 className="nw-widget-title">Поиск</h3>
				<form className="nw-search-form" onSubmit={handleSearchSubmit}>
					<input
						className="nw-search-input"
						placeholder="Поиск по курсам..."
						type="text"
						name="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button className="nw-search-button" type="submit">
						Найти
					</button>
				</form>
			</div>
			<div className="nw-widget">
				<h3 className="nw-widget-title">Сортировка</h3>
				<select
					className="nw-sort-select"
					value={sorting}
					onChange={(e) => updateQueryParams({ sort: e.target.value })}>
					{sortList.map((item, i) => {
						return (
							<option key={i} value={item.value}>
								{item.title}
							</option>
						);
					})}
				</select>
			</div>
			<div className="nw-widget">
				<h3 className="nw-widget-title">Направления</h3>

				{directions && (
					<ul className="nw-filter-list">
						{directions.map((filter, i) => {
							if (!filter.slug || filter.courses?.length === 0) return null;

							return (
								<li key={i}>
									<label className="nw-filter-label">
										<input
											className="nw-filter-checkbox"
											type="checkbox"
											value={filter.slug}
											checked={directionsActive.includes(filter.slug!)}
											onChange={(e) =>
												handleCheckboxChange(
													'direction',
													filter.slug!,
													e.target.checked,
												)
											}
										/>
										<span>
											{filter.title} ({filter.courses?.length})
										</span>
									</label>
								</li>
							);
						})}
					</ul>
				)}
			</div>
			<div className="nw-widget">
				<h3 className="nw-widget-title">Уровень</h3>

				{levels && (
					<ul className="nw-filter-list">
						{levels.map((filter, i) => {
							if (!filter.slug || filter.courses?.length === 0) return null;

							return (
								<li key={i}>
									<label className="nw-filter-label">
										<input
											className="nw-filter-checkbox"
											type="checkbox"
											value={filter.slug}
											checked={levelsActive.includes(filter.slug!)}
											onChange={(e) =>
												handleCheckboxChange(
													'level',
													filter.slug!,
													e.target.checked,
												)
											}
										/>
										<span>
											{filter.title} ({filter.courses?.length})
										</span>
									</label>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</aside>
	);
}
