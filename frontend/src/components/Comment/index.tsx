import { formatDate } from '@/utils/formatDate';
import { Comment as CommentType } from '@backend-types/comment';
import CommentEditButton from './CommentEditButton';
import { User } from '@backend-types/user';

type Props = {
	user?: User;
	comment: CommentType;
};
export default function Comment({ user, comment }: Props) {
	const formattedDate = formatDate(comment.createdAt, 'withTime');

	return (
		<li className="nw-comment-item">
			<div className="nw-comment-meta">
				<span className="nw-comment-author">{comment.user?.username}</span>
				<span className="nw-comment-date">{formattedDate}</span>
			</div>
			<p className="nw-comment-text">{comment.text}</p>

			{comment.user?.username === user?.username && <CommentEditButton comment={comment} />}
		</li>
	);
}
