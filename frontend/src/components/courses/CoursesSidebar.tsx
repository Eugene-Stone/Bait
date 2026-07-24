'use client';
export default function CoursesSidebar() {
	return (
		<aside className="nw-blog-sidebar">
			<div className="nw-widget">
				<h3 className="nw-widget-title">Поиск</h3>
				<form className="nw-search-form">
					<input
						className="nw-search-input"
						placeholder="Поиск по курсам..."
						type="text"
						name="search"
					/>
					<button className="nw-search-button" type="submit">
						Найти
					</button>
				</form>
			</div>
			<div className="nw-widget">
				<h3 className="nw-widget-title">Сортировка</h3>
				<select className="nw-sort-select">
					<option value="createdAt:desc">Сначала новые</option>
					<option value="createdAt:asc">Сначала старые</option>
					<option value="price:asc">Сначала дешевле</option>
					<option value="price:desc">Сначала дороже</option>
				</select>
			</div>
			<div className="nw-widget">
				<h3 className="nw-widget-title">Направления</h3>
				<ul className="nw-filter-list">
					<li>
						<label className="nw-filter-label">
							<input
								className="nw-filter-checkbox"
								type="checkbox"
								defaultValue="python"
							/>
							<span>Python (4)</span>
						</label>
					</li>
					<li>
						<label className="nw-filter-label">
							<input
								className="nw-filter-checkbox"
								type="checkbox"
								defaultValue="javascript"
							/>
							<span>JavaScript (3)</span>
						</label>
					</li>
					<li>
						<label className="nw-filter-label">
							<input
								className="nw-filter-checkbox"
								type="checkbox"
								defaultValue="webdev"
							/>
							<span>Веб-разработка (2)</span>
						</label>
					</li>
					<li>
						<label className="nw-filter-label">
							<input
								className="nw-filter-checkbox"
								type="checkbox"
								defaultValue="kids"
							/>
							<span>Для детей (2)</span>
						</label>
					</li>
				</ul>
			</div>
			<div className="nw-widget">
				<h3 className="nw-widget-title">Уровень</h3>
				<ul className="nw-filter-list">
					<li>
						<label className="nw-filter-label">
							<input
								className="nw-filter-checkbox"
								type="checkbox"
								defaultValue="beginner"
							/>
							<span>С нуля (5)</span>
						</label>
					</li>
					<li>
						<label className="nw-filter-label">
							<input
								className="nw-filter-checkbox"
								type="checkbox"
								defaultValue="middle"
							/>
							<span>Продолжающие (3)</span>
						</label>
					</li>
					<li>
						<label className="nw-filter-label">
							<input
								className="nw-filter-checkbox"
								type="checkbox"
								defaultValue="advanced"
							/>
							<span>Продвинутые (1)</span>
						</label>
					</li>
				</ul>
			</div>
		</aside>
	);
}
