export default function Courses() {
	return (
		<section className="nw-blog-section">
			<div className="nw-blog-container">
				<h2 className="nw-auth-title">Наши курсы</h2>
				<div className="nw-blog-grid">
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
					<main className="nw-articles-grid">
						<article className="nw-article-card">
							<a className="nw-article-img-wrapper" href="/courses/course">
								<picture>
									<source
										srcSet="
				https://nordwood.onrender.com/uploads/large_2_ef57fbaeea.jpg 1000w,
				https://nordwood.onrender.com/uploads/medium_2_ef57fbaeea.jpg 750w,
				https://nordwood.onrender.com/uploads/small_2_ef57fbaeea.jpg 500w,
				https://nordwood.onrender.com/uploads/thumbnail_2_ef57fbaeea.jpg 245w,
	"
										sizes="
				(min-width: 1200px) 420px,
				(min-width: 992px) 33vw,
				(min-width: 640px) 50vw,
				100vw
	"
									/>
									<img
										className="nw-article-img"
										alt="Курс Python с нуля — научись программировать за 3 месяца"
										width={1920}
										height={1080}
										loading="lazy"
										src="https://nordwood.onrender.com/uploads/2_ef57fbaeea.jpg"
									/>
								</picture>
							</a>
							<div className="nw-article-content">
								<div className="nw-article-meta">
									Старт: 1 августа 2026 • 12 мест
								</div>
								<h3 className="nw-article-card-title">
									<a href="/courses/course">Python с нуля до Junior</a>
								</h3>
								<p className="nw-article-excerpt">
									Полный курс по Python для начинающих: переменные, циклы,
									функции, ООП, работа с API, базы данных. 48 занятий, 6 проектов
									в портфолио, менторская поддержка. После курса — готовый
									junior-разработчик с сертификатом школы БАЙТ.
								</p>
								<div className="nw-article-meta" style={{ marginTop: 12 }}>
									<span
										style={{
											background: '#FFD700',
											padding: '4px 8px',
											fontWeight: 900,
											fontSize: 16,
										}}>
										2490 грн
									</span>
									<span style={{ marginLeft: 12, fontSize: 13 }}>
										• 3 месяца • онлайн/офлайн
									</span>
								</div>
								<a className="nw-article-more" href="/courses/course">
									Подробнее о курсе
								</a>
							</div>
						</article>
						<article className="nw-article-card">
							<a className="nw-article-img-wrapper" href="/courses/course">
								<picture>
									<source
										srcSet="
				https://nordwood.onrender.com/uploads/large_1_4a2c403275.png 1000w,
				https://nordwood.onrender.com/uploads/medium_1_4a2c403275.png 750w,
				https://nordwood.onrender.com/uploads/small_1_4a2c403275.png 500w,
				https://nordwood.onrender.com/uploads/thumbnail_1_4a2c403275.png 245w,
	"
										sizes="
				(min-width: 1200px) 420px,
				(min-width: 992px) 33vw,
				(min-width: 640px) 50vw,
				100vw
	"
									/>
									<img
										className="nw-article-img"
										alt="Курс JavaScript + React — стань frontend-разработчиком"
										width={1408}
										height={768}
										loading="lazy"
										src="https://nordwood.onrender.com/uploads/1_4a2c403275.png"
									/>
								</picture>
							</a>
							<div className="nw-article-content">
								<div className="nw-article-meta">
									Старт: 15 августа 2026 • 10 мест
								</div>
								<h3 className="nw-article-card-title">
									<a href="/courses/course">
										JavaScript + React: Frontend-разработка
									</a>
								</h3>
								<p className="nw-article-excerpt">
									Освой самый востребованный стек для веб-разработки. JavaScript,
									React, Redux, работа с API, деплой проектов. 36 занятий,
									создание SPA-приложений, финальный проект для портфолио. На
									выходе — уверенный junior frontend-разработчик.
								</p>
								<div className="nw-article-meta" style={{ marginTop: 12 }}>
									<span
										style={{
											background: '#FFD700',
											padding: '4px 8px',
											fontWeight: 900,
											fontSize: 16,
										}}>
										2990 грн
									</span>
									<span style={{ marginLeft: 12, fontSize: 13 }}>
										• 3 месяца • онлайн/офлайн
									</span>
								</div>
								<a className="nw-article-more" href="/courses/course">
									Подробнее о курсе
								</a>
							</div>
						</article>
					</main>
				</div>
				<nav className="nw-pagination" aria-label="Навигация по курсам">
					<button
						className="nw-pagination-item nw-pagination-arrow"
						type="button"
						aria-label="Предыдущая страница">
						‹
					</button>
					<button className="nw-pagination-item nw-pagination-item-active">1</button>
					<button className="nw-pagination-item">2</button>
					<button className="nw-pagination-item">3</button>
					<button
						className="nw-pagination-item nw-pagination-arrow"
						type="button"
						aria-label="Следующая страница">
						›
					</button>
				</nav>
			</div>
		</section>
	);
}
