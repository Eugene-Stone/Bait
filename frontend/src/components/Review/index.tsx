import { Review as ReviewType } from '@backend-types/review';
import './index.scss';
import { User } from '@backend-types/user';

type Props = {
	user?: User;
	tagName?: React.ElementType;
	review: ReviewType;
};

export default function Review({ tagName = 'div', user, review }: Props) {
	const Tag = tagName;
	const date = new Date(review.createdAt!).toLocaleDateString('uk-UA');

	return (
		<Tag className="review-slide-inner">
			<div className="review-slide-top-line">
				{user && (
					<button className="delete" type="button">
						X
					</button>
				)}

				<div className="review-slide-author">{review.user?.username}</div>
				<div className="review-slide-date">{date}</div>
			</div>
			<div className="review-slide-txt">
				Оценка <strong>{review.rating}</strong>{' '}
				{review.rating === 5 ? 'звезд!!!' : 'звезды'}
				<br />
				{review.text}
				{user && (
					<>
						<br />
						<button className="edit" type="button">
							Изменить отзыв
						</button>
					</>
				)}
			</div>
		</Tag>
	);
}
