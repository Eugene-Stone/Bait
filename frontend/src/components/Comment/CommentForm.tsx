'use client';
import { leaveComment } from '@/api/auth-client';
import { CourseExtended, FormStatus } from '@/types';
import { Course } from '@backend-types/course';
import { User } from '@backend-types/user';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
	user: User;
	course: CourseExtended;
};
type FormValues = {
	comment: string;
};
export default function CommentForm({ user, course }: Props) {
	const [status, setStatus] = useState<FormStatus>('idle');
	const [serverError, setServerError] = useState('');

	// console.log(user);
	// console.log(course);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		mode: 'onChange',
	});

	async function onSubmit(data: FormValues) {
		setServerError('');
		setStatus('loading');

		const commentData = {
			title: course.title!,
			text: data.comment,
			user: user.id!,
			course: course.id!,
		};

		console.log(commentData);

		try {
			const response = await leaveComment(commentData);

			setStatus('success');
			setTimeout(() => {
				reset();
			}, 500);
		} catch (error) {
			if (error instanceof Error) {
				setServerError(error.message);
				console.log(error.message);
			}

			setStatus('error');
		}
	}

	return (
		<div id="comment-form-area" className="nw-comments-area">
			<div className="nw-comment-form-wrapper">
				<h4 className="nw-widget-title">Оставить комментарий</h4>
				<form
					className={status === 'loading' ? 'nw-comment-form sending' : 'nw-comment-form'}
					onSubmit={handleSubmit(onSubmit)}>
					<div className="nw-comment-field-group">
						<label className="nw-comment-label" htmlFor="comment-message">
							Ваш комментарий *
						</label>
						<textarea
							{...register('comment', {
								required: 'Перед отправкой заполните поле',
							})}
							className="nw-comment-textarea"
							id="comment-message"
						/>
						{errors.comment && (
							<span className="error-field">
								{errors.comment?.message || 'Возщникла ошибка'}
							</span>
						)}
					</div>
					<div style={{ display: 'flex', gap: 10 }}>
						<button className="nw-comment-submit-button" type="submit">
							Отправить
						</button>
						{isValid && (
							<button
								className="nw-comment-submit-button cancel"
								type="button"
								onClick={() => reset()}>
								Отмена
							</button>
						)}
					</div>

					{status === 'success' && (
						<p className="success-field">Ваш отзыв на модерации</p>
					)}
					{status === 'error' && (
						<p className="error-field">Возникла ошибка при отправке</p>
					)}
				</form>
			</div>
		</div>
	);
}
