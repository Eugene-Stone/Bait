'use client';
import { resetPassword } from '@/api/auth-client';
import { ResetPasswordForm, ResetPasswordRequest } from '@/types';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ResetPassword() {
	const [status, setStatus] = useState<FormStatus>('idle');
	const [serverError, setServerError] = useState('');
	const router = useRouter();
	const searchParams = useSearchParams();

	const code = searchParams.get('code');

	const {
		register,
		handleSubmit,
		reset,
		watch,
		setError,
		formState: { errors, isValid },
	} = useForm<ResetPasswordForm>({
		mode: 'onChange',
	});

	// Проверка совпадения паролей
	const password = watch('password');

	async function onSubmit(dataReset: ResetPasswordForm) {
		setServerError('');
		setStatus('loading');

		try {
			if (!code) {
				setServerError('Некорректная ссылка для восстановления пароля.');
				setStatus('error');
				return;
			}

			const dataResetWithCode = { ...dataReset, code };

			const response = await resetPassword(dataResetWithCode);

			setStatus('success');
			setTimeout(() => {
				reset();
				router.push(`/login`);
				router.refresh();
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
		<section className="nw-auth-section">
			<div className="nw-auth-container">
				<h2 className="nw-auth-title">Новый пароль</h2>
				<form
					className={status === 'loading' ? 'nw-auth-form sending' : 'nw-auth-form'}
					onSubmit={handleSubmit(onSubmit)}
					autoComplete="off">
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="reset-password-new">
							Новый пароль
						</label>
						<input
							{...register('password', {
								required: 'This field is required',
								minLength: {
									value: 6,
									message: 'Минимум 6 символов',
								},
							})}
							className="nw-auth-input"
							type="password"
							id="reset-password-new"
						/>
						{errors.password && (
							<span className="error-field">
								{errors.password?.message || `password field error message.`}
							</span>
						)}
					</div>
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="reset-password-confirm">
							Подтвердите пароль
						</label>
						<input
							{...register('passwordConfirmation', {
								required: 'This field is required',
								validate: (value) => value === password || 'Пароли не совпадают',
							})}
							className="nw-auth-input"
							type="password"
							id="reset-password-confirm"
						/>
						{errors.passwordConfirmation && (
							<span className="error-field">
								{errors.passwordConfirmation?.message ||
									`passwordConfirmation field error message.`}
							</span>
						)}
					</div>
					<button className="nw-auth-button" type="submit">
						Сохранить изменения
					</button>

					{status === 'success' && <p className="success-field">Ваш пароль изменен</p>}
					{status === 'error' && (
						<p className="error-field">{serverError || 'Error Message'}</p>
					)}
				</form>
			</div>
		</section>
	);
}
