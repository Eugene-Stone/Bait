export default function Gallery() {
	return (
		<section id="gallery" className="sect-gallery bg-color-1">
			<div className="sect-inner">
				<div className="container">
					<div className="title-sect">
						<h2 className="h1-title">Проекты студентов</h2>
					</div>
				</div>
				<div className="container-fluid">
					<div className="gallery-box masonry-box">
						<div
							className="gallery-lst masonry-lst"
							style={{ position: 'relative', height: '512.781px' }}>
							<div
								className="gallery-itm masonry-itm"
								style={{ position: 'absolute', left: '0%', top: 0 }}>
								<span className="gallery-itm-lnk">
									<picture>
										<source
											srcSet="http://localhost:1337/uploads/medium_vertical_ac259b5380.jpg 525w, http://localhost:1337/uploads/small_vertical_ac259b5380.jpg 350w, http://localhost:1337/uploads/thumbnail_vertical_ac259b5380.jpg 109w"
											sizes="
																											(min-width: 992px) 33vw,
																											50vw
																							"
										/>
										<img
											className="main-img"
											alt="SPA-приложение на React — проект студента школы БАЙТ"
											width={598}
											height={854}
											loading="lazy"
											src="http://localhost:1337/uploads/vertical_ac259b5380.jpg"
										/>
									</picture>
								</span>
							</div>
							<div
								className="gallery-itm masonry-itm"
								style={{ position: 'absolute', left: '33.329%', top: 0 }}>
								<span className="gallery-itm-lnk">
									<picture>
										<source
											srcSet="http://localhost:1337/uploads/large_2_ef57fbaeea.jpg 1000w, http://localhost:1337/uploads/medium_2_ef57fbaeea.jpg 750w, http://localhost:1337/uploads/small_2_ef57fbaeea.jpg 500w, http://localhost:1337/uploads/thumbnail_2_ef57fbaeea.jpg 245w"
											sizes="
																											(min-width: 992px) 33vw,
																											50vw
																							"
										/>
										<img
											className="main-img"
											alt="Интернет-магазин на Python Django — выпускной проект курса"
											width={1920}
											height={1080}
											loading="lazy"
											src="http://localhost:1337/uploads/2_ef57fbaeea.jpg"
										/>
									</picture>
								</span>
							</div>
							<div
								className="gallery-itm masonry-itm"
								style={{ position: 'absolute', left: '66.6581%', top: 0 }}>
								<span className="gallery-itm-lnk">
									<picture>
										<source
											srcSet="http://localhost:1337/uploads/large_3_cc06b3bf40.jpg 1000w, http://localhost:1337/uploads/medium_3_cc06b3bf40.jpg 750w, http://localhost:1337/uploads/small_3_cc06b3bf40.jpg 500w, http://localhost:1337/uploads/thumbnail_3_cc06b3bf40.jpg 245w"
											sizes="
																											(min-width: 992px) 33vw,
																											50vw
																							"
										/>
										<img
											className="main-img"
											alt="Чат-бот для Telegram на Python — проект студента БАЙТ"
											width={1920}
											height={1080}
											loading="lazy"
											src="http://localhost:1337/uploads/3_cc06b3bf40.jpg"
										/>
									</picture>
								</span>
							</div>
							<div
								className="gallery-itm masonry-itm"
								style={{
									position: 'absolute',
									left: '33.329%',
									top: '213.859px',
								}}>
								<span className="gallery-itm-lnk">
									<picture>
										<source
											srcSet="http://localhost:1337/uploads/large_1_ee91c5e70d.jpg 1000w, http://localhost:1337/uploads/medium_1_ee91c5e70d.jpg 750w, http://localhost:1337/uploads/small_1_ee91c5e70d.jpg 500w, http://localhost:1337/uploads/thumbnail_1_ee91c5e70d.jpg 245w"
											sizes="
																											(min-width: 992px) 33vw,
																											50vw
																							"
										/>
										<img
											className="main-img"
											alt="Лендинг для стартапа на JavaScript — работа с курса веб-разработки"
											width={1920}
											height={1080}
											loading="lazy"
											src="http://localhost:1337/uploads/1_ee91c5e70d.jpg"
										/>
									</picture>
								</span>
							</div>
							<div
								className="gallery-itm masonry-itm"
								style={{
									position: 'absolute',
									left: '66.6581%',
									top: '213.859px',
								}}>
								<span className="gallery-itm-lnk">
									<picture>
										<source
											srcSet="http://localhost:1337/uploads/large_4_e4dd91e389.jpg 1000w, http://localhost:1337/uploads/medium_4_e4dd91e389.jpg 750w, http://localhost:1337/uploads/small_4_e4dd91e389.jpg 500w, http://localhost:1337/uploads/thumbnail_4_e4dd91e389.jpg 245w"
											sizes="
																											(min-width: 992px) 33vw,
																											50vw
																							"
										/>
										<img
											className="main-img"
											alt="Дашборд аналитики на React — финальный проект курса JavaScript"
											width={1920}
											height={1080}
											loading="lazy"
											src="http://localhost:1337/uploads/4_e4dd91e389.jpg"
										/>
									</picture>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
