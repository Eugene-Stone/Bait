'use client';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Review } from '@backend-types/review';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
	reviewsData: {
		data: Review[];
		meta: any;
	};
};

export default function ReviewsSlider({ reviewsData }: Props) {
	const { data: reviews } = reviewsData;
	console.log(reviews);

	return (
		<div className="reviews__slider swiper__slider">
			<Swiper
				className="reviews__slider-list"
				modules={[Navigation, Pagination, Scrollbar, Mousewheel]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				scrollbar={{ draggable: true }}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				// pagination={{
				// 	el: '.swiper-pagination',
				// 	clickable: true,
				// }}
				pagination={false}
				breakpoints={{
					576: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
				}}
				mousewheel={{
					enabled: true,
					forceToAxis: true,
					sensitivity: 1,
				}}>
				{reviews?.map((review, i) => {
					const date = new Date(review.createdAt!).toLocaleDateString('uk-UA');

					return (
						<SwiperSlide key={i}>
							<div className="review-slide-itm">
								<div className="review-slide-inner">
									<div className="review-slide-top-line">
										<div className="review-slide-author">
											{review?.user?.username}
										</div>
										<div className="review-slide-date">{date}</div>
									</div>
									<div className="review-slide-txt">
										Оценка <strong>{review.rating}</strong>{' '}
										{review.rating === 5 ? 'звезд!!!' : 'звезды'} <br />
										{review.text}
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<div className="slide-controls">
				<div className="slider-pagination">
					<div className="swiper-pagination" />
				</div>
				<div className="slider-navigation">
					<button
						type="button"
						className="swiper-button swiper-button-prev"
						aria-label="Slide prev"></button>
					<button
						type="button"
						className="swiper-button swiper-button-next"
						aria-label="Slide next"></button>
				</div>
			</div>
		</div>
	);
}
