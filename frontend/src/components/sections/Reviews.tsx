import { SectionsReviews } from '@backend-types/sectionsReviews';

type Props = {
	data: SectionsReviews;
};
export default function Reviews({ data }: Props) {
	return (
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
										устроился на позицию junior Python-разработчика. Менторы —
										топ, программа структурированная, без воды. Код-ревью каждый
										день, куча практики. Очень рад, что выбрал именно эту школу!
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
										гуманитариев. Оказалось, с хорошими менторами и правильной
										подачей можно освоить всё. Прошла курс по JavaScript,
										сделала три проекта в портфолио и получила оффер от
										IT-компании. Лучшее вложение в себя за последние годы!
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
										помогут, если застрял. Уже рекомендовал БАЙТ трём друзьям —
										двое учатся, третий думает.
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
										онлайн-лекциями — очень гибкий график. За 3 месяца освоила
										вёрстку, JavaScript и основы React. Отдельный респект за
										помощь с составлением резюме и подготовкой к собеседованию.
										Без этой поддержки было бы гораздо сложнее.
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
										разрозненные, не хватало системы. Здесь всё по полочкам: от
										основ синтаксиса до деплоя продакшн-приложений. Комьюнити
										активное, можно обсуждать задачи, помогать друг другу.
										Отличный старт для тех, кто хочет войти в IT.
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
	);
}
