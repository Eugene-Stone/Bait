'use client';
import { login } from '@/api/auth-client';
import { LoginRequest } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Login() {
	const [status, setStatus] = useState<FormStatus>('idle');
	const [serverError, setServerError] = useState('');
	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isValid },
	} = useForm<LoginRequest>({
		mode: 'onChange',
	});

	async function onSubmit(dataAuth: LoginRequest) {
		setServerError('');
		setStatus('loading');

		const { identifier, password } = dataAuth;

		try {
			const response = await login(identifier, password);

			// console.log(dataAuth);
			// console.log(response);

			setStatus('success');
			setTimeout(() => {
				reset();
				router.push(`/profile/info`);
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
				<h2 className="nw-auth-title">Вход</h2>
				<form
					className={status === 'loading' ? 'nw-auth-form sending' : 'nw-auth-form'}
					onSubmit={handleSubmit(onSubmit)}>
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="login-email">
							Электронная почта
						</label>
						<input
							{...register('identifier', {
								required: 'This field is required',
							})}
							className="nw-auth-input"
							type="email"
							id="login-email"
							autoComplete="email"
						/>
						{errors.identifier && (
							<span className="error-field">
								{errors.identifier?.message || `identifier field error message.`}
							</span>
						)}
					</div>
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="login-password">
							Пароль
						</label>
						<input
							{...register('password', {
								required: 'This field is required',
							})}
							className="nw-auth-input"
							type="password"
							id="login-password"
							autoComplete="current-password"
						/>
						{errors.password && (
							<span className="error-field">
								{errors.password?.message || `identifier field error message.`}
							</span>
						)}
					</div>
					<button className="nw-auth-button" type="submit">
						Войти
					</button>

					{status === 'success' && <p className="success-field">Success Message</p>}
					{status === 'error' && (
						<p className="error-field">{serverError || 'Error Message'}</p>
					)}
				</form>
				<div className="nw-auth-links">
					<Link className="nw-auth-link" href="/forgot-password" data-discover="true">
						Забыли пароль?
					</Link>
					<Link className="nw-auth-link" href="/registration" data-discover="true">
						Создать аккаунт
					</Link>
				</div>
			</div>
		</section>
	);
}
