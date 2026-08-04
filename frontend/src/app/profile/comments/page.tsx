import { getMe } from '@/api/auth-server';
import Comment from '@/components/Comment';
import Modal from '@/components/Modal';
import { BACKEND_URL } from '@/constants';
import { Comment as CommentType } from '@backend-types/comment';
import { User } from '@backend-types/user';

async function getComments(user: User) {
	const response = await fetch(
		`${BACKEND_URL}/api/comments?filters[user][id][$eq]=${user.id}&populate=*`,
		{
			next: { revalidate: 600 },
		},
	);

	if (!response.ok) {
		throw new Error('Failed to fetch');
	}
	return response.json();
}

export default async function Comments() {
	const user: User = await getMe();
	const commentsData = await getComments(user);

	const { data: comments }: { data: CommentType[] } = commentsData;

	return comments.length > 0 ? (
		<>
			<h3 className="nw-comments-title" style={{ marginTop: 0 }}>
				Ваши коментарии к курсам
			</h3>
			<ul className="nw-comments-list">
				{comments.map((comment, i) => {
					return <Comment key={i} user={user} comment={comment} />;
				})}
			</ul>
		</>
	) : (
		<p>Ты пока не оставил ни одного коментария.</p>
	);
}
