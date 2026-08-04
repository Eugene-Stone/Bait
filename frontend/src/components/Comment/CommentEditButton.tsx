'use client';

import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { Comment } from '@backend-types/comment';
import { CommentExtended } from '@/types';

import { addCommentEditableId } from '@/redux/slices/commentSlice';

export default function CommentEditButton({ comment }: { comment: CommentExtended }) {
	const dispatch = useDispatch();
	const { commentEditableId } = useSelector((state: RootState) => state.commentReducer);
	// console.log(commentEditableId);

	function editComment(value: string) {
		dispatch(addCommentEditableId(value));
	}

	return (
		<div className="edit">
			<button className="edit-btn" onClick={() => editComment(comment.documentId || '1')}>
				Изменить
			</button>
		</div>
	);
}
