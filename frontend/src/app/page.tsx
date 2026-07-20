import { buildQuery } from '@/utils/buildQuery';
import { notFound } from 'next/navigation';

export default async function Home() {
	const query = buildQuery({
		populate: {
			sections: {
				on: {
					// 'sections.about': {
					// 	populate: '*',
					// },
					// 'sections.gallery': {
					// 	populate: {
					// 		gallery: {
					// 			populate: {
					// 				images: true,
					// 			},
					// 		},
					// 	},
					// },
					// 'sections.hero': {
					// 	populate: '*',
					// },
					'sections.request': {
						populate: {
							form: {
								populate: {
									fields: {
										on: {
											'forms.form-checkboxes': {
												populate: '*',
											},
											'forms.form-input': {
												populate: '*',
											},
											'forms.form-select': {
												populate: '*',
											},
											'forms.form-submit': {
												populate: '*',
											},
											'forms.form-textarea': {
												populate: '*',
											},
											'forms.form-agree': {
												populate: '*',
											},
										},
									},
								},
							},
						},
					},
				},
			},
		},
	});

	// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
	// 	cache: 'no-store', // Отключение кеша
	// });
	const response = await fetch(`http://localhost:1337/api/homepage?${query}`, {
		cache: 'no-store', // Отключение кеша
	});

	if (response.status === 404) {
		notFound();
	}
	if (!response.ok) {
		throw new Error('Не удалось загрузить данные');
	}

	const data = await response.json();

	console.log(data); // Выведется в терминале, а не в браузере
	console.log(query); // Выведется в терминале, а не в браузере

	return (
		<>
			{data.title}

			<section className="top-screen bg-color-1">
				<div className="sect-inner">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="title-sect">
									<h2 className="h1-title">
										Программирование
										<br />
										с нуля до
										<br />
										первой работы
									</h2>
								</div>
								<div className="txt-box">
									<h2>Твой первый байт в IT</h2>
									<p>
										Школа программирования БАЙТ — это практические курсы для
										тех, кто хочет освоить востребованную профессию с полного
										нуля. Мы не читаем скучные лекции — мы пишем код, разбираем
										реальные задачи и собираем портфолио. Наши менторы —
										действующие разработчики из топовых компаний, которые знают,
										чему учить, чтобы ты был готов к реальной работе. Никакой
										воды, только хард-скиллы, код-ревью и проекты, которые не
										стыдно показать работодателю.
									</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="top-screen-image-box">
									<div className="top-screen-image">
										<picture>
											<source
												srcSet="
								http://localhost:1337/uploads/large_1_4a2c403275.png 1000w,
																																	http://localhost:1337/uploads/medium_1_4a2c403275.png 750w,
																																	http://localhost:1337/uploads/small_1_4a2c403275.png 500w,
																																	http://localhost:1337/uploads/thumbnail_1_4a2c403275.png 245w,
																													"
												sizes="
																																	(min-width: 1200px) 625px,
																																	(min-width: 992px) 476px,
																																	(min-width: 576px) 400px,
																																	100vw
																													"
											/>
											<img
												alt="Программирование с нуля до первой работы в школе БАЙТ"
												width={1000}
												height={1000}
												fetchPriority="high"
												src="http://localhost:1337/uploads/1_4a2c403275.png"
											/>
										</picture>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="sect-txt bg-color-1">
				<div className="sect-inner">
					<div className="container">
						<div className="title-sect">
							<h2 className="h1-title">
								<span>О школе</span>
							</h2>
						</div>
						<div className="txt-box color-dark">
							<div className="row justify-content-center">
								<div className="col-lg-6">
									<picture>
										<source
											srcSet="
																								http://localhost:1337/uploads/large_1_4a2c403275.png 1000w,
																								http://localhost:1337/uploads/medium_1_4a2c403275.png 750w,
																								http://localhost:1337/uploads/small_1_4a2c403275.png 500w,
																								http://localhost:1337/uploads/thumbnail_1_4a2c403275.png 245w,
																				"
											sizes="
																								(min-width: 1200px) 625px,
																								(min-width: 992px) 476px,
																								(min-width: 576px) 400px,
																								100vw
																				"
										/>
										<img
											alt="О школе программирования БАЙТ"
											width={1408}
											height={768}
											loading="lazy"
											src="http://localhost:1337/uploads/1_4a2c403275.png"
										/>
									</picture>
								</div>
								<div className="col-lg-6">
									<div>
										<p>
											БАЙТ — школа программирования, где новички становятся
											junior-разработчиками за считанные месяцы. Мы создали
											образовательную среду, в которой теория неразрывно
											связана с практикой: каждый студент с первого дня пишет
											код, решает реальные задачи и собирает портфолио. Наши
											программы построены на опыте действующих разработчиков
											из IT-компаний, поэтому учебный материал всегда актуален
											и соответствует требованиям рынка.
										</p>
										<p>
											Мы верим, что программированию может научиться каждый —
											независимо от возраста, образования и бэкграунда. В
											БАЙТе ты найдешь поддержку менторов, активное комьюнити
											сокурсников и структурированную программу, которая шаг
											за шагом приведет тебя от `Hello, World!` до уверенного
											кода на Python, JavaScript и других востребованных
											технологиях. Наша цель — не просто обучить синтаксису, а
											подготовить тебя к реальной работе в IT-индустрии.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="service" className="sect-txt bg-color-2">
				<div className="sect-inner">
					<div className="container">
						<div className="title-sect">
							<h2 className="h1-title">
								<span>Наши курсы</span>
							</h2>
						</div>
						<div className="txt-box color-light">
							<div className="row justify-content-center">
								<div className="col-lg-12">
									<h2>Python, JavaScript, веб-разработка и не только</h2>
									<p>
										Школа БАЙТ предлагает курсы по самым востребованным
										направлениям: от основ программирования на Python до
										продвинутой веб-разработки на JavaScript и React. Каждый
										курс построен вокруг практики — ты с первого занятия пишешь
										код, решаешь задачи и работаешь над собственными проектами.
										Мы даем структурированную программу, живые code-review,
										поддержку ментора и комьюнити, где можно задать любой
										вопрос. Выпускники получают сертификат, портфолио из
										реальных проектов и помощь с подготовкой к собеседованиям.
										Наша цель — не просто научить синтаксису, а сделать из тебя
										джуниор-разработчика, готового к первой работе в IT.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="opening-hours" className="sect-txt bg-color-3">
				<div className="sect-inner">
					<div className="container">
						<div className="title-sect">
							<h2 className="h1-title">
								<span>Расписание занятий</span>
							</h2>
						</div>
						<div className="txt-box color-dark">
							<div className="row justify-content-center">
								<div className="col-lg-6">
									<h2>Очные группы, онлайн-лекции и менторские сессии</h2>
								</div>
								<div className="col-lg-6">
									<p>
										Будние дни: 10:00 – 21:00&nbsp;
										<br />
										Суббота: 10:00 – 16:00
										<br />
										Менторские консультации — по предварительной записи
										<br />
										Онлайн-доступ к материалам: 24/7
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

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

			<section className="sect-reviews">
				<div className="container">
					<div className="title-sect">
						<h2 className="h1-title">
							<span>Отзывы студентов</span>
						</h2>
					</div>
				</div>
				<div className="reviews__slider swiper__slider">
					<div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden reviews__slider-list">
						<div
							className="swiper-wrapper"
							style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
							<div
								className="swiper-slide swiper-slide-active"
								data-swiper-slide-index={0}
								style={{ width: 361 }}>
								<div className="review-slide-itm">
									<div className="review-slide-inner">
										<div className="review-slide-top-line">
											<div className="review-slide-author">Алексей К.</div>
											<div className="review-slide-date">08.07.2026</div>
										</div>
										<div className="review-slide-txt">
											Оценка <strong>5</strong> звёзд <br />
											Пришёл в БАЙТ с нулевыми знаниями, а через 4 месяца уже
											устроился на позицию junior Python-разработчика. Менторы
											— топ, программа структурированная, без воды. Код-ревью
											каждый день, куча практики. Очень рад, что выбрал именно
											эту школу!
										</div>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide swiper-slide-next"
								data-swiper-slide-index={1}
								style={{ width: 361 }}>
								<div className="review-slide-itm">
									<div className="review-slide-inner">
										<div className="review-slide-top-line">
											<div className="review-slide-author">Марина Д.</div>
											<div className="review-slide-date">08.07.2026</div>
										</div>
										<div className="review-slide-txt">
											Оценка <strong>5</strong> звёзд <br />
											До БАЙТа думала, что программирование — это не для
											гуманитариев. Оказалось, с хорошими менторами и
											правильной подачей можно освоить всё. Прошла курс по
											JavaScript, сделала три проекта в портфолио и получила
											оффер от IT-компании. Лучшее вложение в себя за
											последние годы!
										</div>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide"
								data-swiper-slide-index={2}
								style={{ width: 361 }}>
								<div className="review-slide-itm">
									<div className="review-slide-inner">
										<div className="review-slide-top-line">
											<div className="review-slide-author">Игорь П.</div>
											<div className="review-slide-date">10.07.2026</div>
										</div>
										<div className="review-slide-txt">
											Оценка <strong>5</strong> звёзд <br />
											Курс по React превзошёл ожидания. Ментор — действующий
											senior-разработчик, делится реальными кейсами и best
											practices. Атмосфера в школе супер-дружелюбная, всегда
											помогут, если застрял. Уже рекомендовал БАЙТ трём
											друзьям — двое учатся, третий думает.
										</div>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide"
								data-swiper-slide-index={3}
								style={{ width: 361 }}>
								<div className="review-slide-itm">
									<div className="review-slide-inner">
										<div className="review-slide-top-line">
											<div className="review-slide-author">Ольга С.</div>
											<div className="review-slide-date">12.07.2026</div>
										</div>
										<div className="review-slide-txt">
											Оценка <strong>5</strong> звёзд <br />
											Понравилось, что можно совмещать очные занятия с
											онлайн-лекциями — очень гибкий график. За 3 месяца
											освоила вёрстку, JavaScript и основы React. Отдельный
											респект за помощь с составлением резюме и подготовкой к
											собеседованию. Без этой поддержки было бы гораздо
											сложнее.
										</div>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide"
								data-swiper-slide-index={4}
								style={{ width: 361 }}>
								<div className="review-slide-itm">
									<div className="review-slide-inner">
										<div className="review-slide-top-line">
											<div className="review-slide-author">Дмитрий В.</div>
											<div className="review-slide-date">15.07.2026</div>
										</div>
										<div className="review-slide-txt">
											Оценка <strong>5</strong> звёзд <br />
											До БАЙТа пробовал учиться сам по YouTube — знания были
											разрозненные, не хватало системы. Здесь всё по полочкам:
											от основ синтаксиса до деплоя продакшн-приложений.
											Комьюнити активное, можно обсуждать задачи, помогать
											друг другу. Отличный старт для тех, кто хочет войти в
											IT.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-scrollbar swiper-scrollbar-horizontal" style={{}}>
							<div
								className="swiper-scrollbar-drag"
								style={{
									transform: 'translate3d(0px, 0px, 0px)',
									width: '636.6px',
								}}
							/>
						</div>
					</div>
					<div className="slide-controls">
						<div className="slider-pagination">
							<div className="swiper-pagination" />
						</div>
						<div className="slider-navigation">
							<button
								type="button"
								className="swiper-button swiper-button-prev"
								aria-label="Предыдущий отзыв">
								<svg
									className="swiper-navigation-icon"
									width={11}
									height={20}
									viewBox="0 0 11 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
										fill="currentColor"
									/>
								</svg>
							</button>
							<button
								type="button"
								className="swiper-button swiper-button-next"
								aria-label="Следующий отзыв">
								<svg
									className="swiper-navigation-icon"
									width={11}
									height={20}
									viewBox="0 0 11 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
										fill="currentColor"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>

			<section id="request" className="sect-request bg-color-2">
				<div className="sect-inner">
					<div className="container">
						<div className="title-sect">
							<h2 className="h1-title">
								<span>Записаться на курс</span>
							</h2>
						</div>
						<div className="form-box color-light">
							<div className="row justify-content-center">
								<div className="col-lg-12">
									<h2>Начни свой путь в IT</h2>
									<p>
										Заполни форму, и мы подберем подходящий курс под твой
										уровень подготовки и карьерные цели. Наш менеджер свяжется с
										тобой, расскажет о программе, форматах обучения, стоимости и
										поможет выбрать направление — Python, JavaScript,
										веб-разработка или другое.
									</p>

									<form className="form__request">
										<div className="row">
											<div className="col-md-6">
												<p>
													<label>Твое имя</label>

													<input
														placeholder="Введи имя"
														type="text"
														name="name"
													/>
												</p>
											</div>
											<div className="col-md-6">
												<p>
													<label>Телефон</label>

													<input
														placeholder="+7 (___) ___-__-__"
														type="text"
														name="phone"
													/>
												</p>
											</div>
											<div className="col-md-6">
												<p>
													<label>E-mail</label>

													<input
														placeholder="example@mail.com"
														type="email"
														name="email"
													/>
												</p>
											</div>
											<div className="col-md-6">
												<p>
													<label>Курс</label>

													<select
														name="course"
														aria-label="Выбери направление обучения">
														<option value="choose">
															Выбери направление
														</option>
														<option value="python-basic">
															Python с нуля
														</option>
														<option value="python-advanced">
															Python Advanced
														</option>
														<option value="js-basic">
															JavaScript с нуля
														</option>
														<option value="js-react">
															JavaScript + React
														</option>
														<option value="webdev">
															Веб-разработка Fullstack
														</option>
														<option value="other">Другое</option>
													</select>
												</p>
											</div>
											<div className="col-md-12">
												<p>
													<label>Уровень подготовки</label>

													<label>
														<input
															type="radio"
															defaultValue="zero"
															defaultChecked
															name="level"
														/>
														Полный ноль
													</label>
													<label>
														<input
															type="radio"
															defaultValue="basic"
															name="level"
														/>
														Есть базовые знания
													</label>
													<label>
														<input
															type="radio"
															defaultValue="middle"
															name="level"
														/>
														Уверенный пользователь
													</label>
												</p>
											</div>
											<div className="col-md-12">
												<p>
													<label>Формат обучения</label>

													<label>
														<input
															type="checkbox"
															defaultValue="offline"
															name="format"
														/>
														Очные занятия в школе
													</label>
													<label>
														<input
															type="checkbox"
															defaultValue="online"
															name="format"
														/>
														Онлайн-лекции
													</label>
													<label>
														<input
															type="checkbox"
															defaultValue="mentor"
															defaultChecked
															name="format"
														/>
														Менторская поддержка
													</label>
												</p>
											</div>
											<div className="col-md-12">
												<p>
													<label>Расскажи о своих целях</label>

													<textarea
														name="message"
														placeholder="Какой у тебя опыт в программировании? Почему хочешь учиться? На какую работу рассчитываешь после курса?"
														rows={6}
														defaultValue={''}
													/>
												</p>
											</div>
											<div className="col-md-12">
												<p>
													<label>
														<input type="checkbox" name="agree" />Я
														согласен на обработку персональных данных и
														получение рассылки о старте курсов.
													</label>
												</p>
											</div>
											<div className="col-md-12">
												<div className="btn-more-wrap">
													<button type="submit" className="btn disabled ">
														<span>Отправить заявку</span>
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="sect-txt">
				<div className="sect-inner">
					<div className="container">
						<div className="title-sect">
							<h1 className="h1-title">
								<span>Title section</span>
							</h1>
						</div>
						<div className="txt-box">
							<div className="row justify-content-center">
								<div className="col-lg-12">
									<h1>h1 - Title styles</h1>
									<h2>h2 - Title styles</h2>
									<h3>h3 - Title styles</h3>
									<h4>h4 - Title styles</h4>
									<h5>h5 - Title styles</h5>
									<h6>h6 - Title styles</h6>
									<p>
										Lorem ipsum dolor sit amet, <a href="#">Link styles</a>{' '}
										consectetur adipisicing elit. Laboriosam obcaecati magni
										quasi quod nam nesciunt.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing
										elitLorem ipsum dolor sit amet, consectetur adipisicing elit
										. Laboriosam obcaecati magni quasi quod nam nesciunt.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Laboriosam obcaecati magni quasi quod nam nesciunt.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Laboriosam obcaecati magni quasi quod nam nesciunt.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing
										elitLorem ipsum dolor sit amet, consectetur adipisicing elit
										. Laboriosam obcaecati magni quasi quod nam nesciunt.
									</p>
									<ol>
										<li data-list-item-id="ee10a52a13df253c6a8bd6c4003ede0ea">
											Füllen Sie die Stimm/-Wahlzettel aus und verschliessen
											Sie diese im Stimmkuvert oder in einem privaten,
											neutralen Kuvert.
										</li>
										<li data-list-item-id="e5d13a4d0300c3cca727b3e0d3d28b006">
											Unterschreiben Sie die untenstehende Erklärung. Ohne
											Unterschrift ist die Stimmabgabe ungültig.
										</li>
										<li data-list-item-id="e711c1182f9824b48f3e2eed8ec32afe8">
											Legen Sie das Stimmkuvert oder das private neutrale
											Kuvert mit den Stimmzetteln und dem Stimmausweis mit der
											unterzeichneten Erklärung in das Zustellkuvert, mit dem
											Sie das Abstimmungsmaterial erhalten haben (oder in ein
											mit dem Vermerk «briefliche Stimmabgabe» versehenes
											privates Rücksendekuvert.)
										</li>
										<li data-list-item-id="e1c6d5ad436592606a84f7e848338fb3e">
											Das Zustellkuvert ist in der Folge entweder frankiert
											der Post zu übergeben oder in den von der Gemeinde
											bezeichneten Briefkasten der Gemeindeverwaltung
											einzuwerfen.
										</li>
									</ol>
									<ul>
										<li data-list-item-id="edec2914825a4d040a2c6411d247345c3">
											Füllen Sie die Stimm/-Wahlzettel aus und verschliessen
											Sie diese im Stimmkuvert oder in einem privaten,
											neutralen Kuvert.
										</li>
										<li data-list-item-id="e8f02f45d7a735fe348fedd7422b84caf">
											Unterschreiben Sie die untenstehende Erklärung. Ohne
											Unterschrift ist die Stimmabgabe ungültig.
										</li>
										<li data-list-item-id="e1b2ffd8790c15b47f07fab0e14d32c96">
											Legen Sie das Stimmkuvert oder das private neutrale
											Kuvert mit den Stimmzetteln und dem Stimmausweis mit der
											unterzeichneten Erklärung in das Zustellkuvert, mit dem
											Sie das Abstimmungsmaterial erhalten haben (oder in ein
											mit dem Vermerk «briefliche Stimmabgabe» versehenes
											privates Rücksendekuvert.)
										</li>
										<li data-list-item-id="ec10e70233a40556059a0547d0ca7097d">
											Das Zustellkuvert ist in der Folge entweder frankiert
											der Post zu übergeben oder in den von der Gemeinde
											bezeichneten Briefkasten der Gemeindeverwaltung
											einzuwerfen.
										</li>
									</ul>
									<p>&nbsp;</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
