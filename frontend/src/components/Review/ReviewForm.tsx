'use client';
import { leaveReview } from '@/api/auth-client';
import { FormStatus } from '@/types';
import { User } from '@backend-types/user';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
	user: User;
};

type FormValues = {
	title: string;
	rating: number;
	text: string;
};
export default function ReviewForm({ user }: Props) {
	const [status, setStatus] = useState<FormStatus>();
	const [serverError, setServerError] = useState('');

	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,

		formState: { errors, isValid, isDirty },
	} = useForm<FormValues>({
		mode: 'onChange',
		defaultValues: {},
	});

	async function onSubmit(data: FormValues) {
		setServerError('');
		setStatus('loading');

		const reviewData = {
			title: data.title,
			rating: Number(data.rating),
			text: data.text,
			user: user.id!,
		};

		console.log(reviewData);

		try {
			const response = await leaveReview(reviewData);

			setStatus('success');
			setTimeout(() => {
				reset({
					title: '',
					rating: NaN,
					text: '',
				});

				router.refresh();
				setStatus('idle');
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
		<form
			className={status === 'loading' ? 'nw-auth-form sending' : 'nw-auth-form'}
			onSubmit={handleSubmit(onSubmit)}>
			<h3>Оставить отзыв</h3>
			<div className="nw-auth-group">
				<label className="nw-auth-label" htmlFor="profile-firstname">
					Вердикт
				</label>
				<input
					{...register('title', {
						required: 'Заполните поле',
					})}
					className="nw-auth-input"
					type="text"
				/>
				{errors.title && (
					<span className="error-field">
						{errors.title?.message || 'Возникла ошибка'}
					</span>
				)}
			</div>
			<div className="nw-auth-group">
				<label className="nw-auth-label" htmlFor="profile-firstname">
					Оценка
				</label>
				<input
					{...register('rating', {
						required: 'Заполните поле',
						valueAsNumber: true,
					})}
					className="nw-auth-input"
					min={1}
					max={5}
					type="number"
				/>
				{errors.rating && (
					<span className="error-field">
						{errors.rating?.message || 'Возникла ошибка'}
					</span>
				)}
			</div>
			<div className="nw-auth-group">
				<label className="nw-auth-label" htmlFor="profile-firstname">
					Ваш коментарий
				</label>
				<textarea
					{...register('text', {
						required: 'Заполните поле',
					})}
					className="nw-auth-input"
					rows={6}
					defaultValue={''}
				/>
				{errors.text && (
					<span className="error-field">{errors.text?.message || 'Возникла ошибка'}</span>
				)}
			</div>
			<div style={{ display: 'flex', gap: 10 }}>
				<button className="nw-auth-button" type="submit">
					Оставить комментарий
				</button>

				{isDirty && (
					<button
						className="nw-auth-button cancel"
						type="button"
						onClick={() => {
							reset();
						}}>
						Отмена
					</button>
				)}
			</div>

			{status === 'success' && <p className="success-field">Ваш отзыв на модерации</p>}
			{status === 'error' && <p className="error-field">Возникла ошибка при отправке</p>}
		</form>
	);
}
