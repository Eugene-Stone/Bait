import { getMe } from '@/api/auth-server';
import Review from '@/components/Review';
import { BACKEND_URL } from '@/constants';
import { Review as ReviewType } from '@backend-types/review';
import { User } from '@backend-types/user';

async function getReviews(user: User) {
	const response = await fetch(
		`${BACKEND_URL}/api/reviews?filters[user][id][$eq]=${user.id}&populate=*`,
		{
			next: { revalidate: 60 },
		},
	);

	if (!response.ok) {
		throw new Error('Failed to fetch');
	}
	return response.json();
}

export default async function Reviews() {
	const user: User = await getMe();
	const reviewsData = await getReviews(user);

	const { data: reviews }: { data: ReviewType[] } = reviewsData;

	return reviews.length > 0 ? (
		<ul className="reviews__list">
			{reviews.map((review, i) => {
				return <Review key={i} tagName="li" user={user} review={review} />;
			})}
		</ul>
	) : (
		<p>
			Ты пока не оставил ни одного отзыва. Запишись на курс, пройди обучение и поделись
			впечатлениями!
		</p>
	);
}
