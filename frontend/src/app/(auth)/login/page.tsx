import Link from 'next/link';
import React from 'react';

export default function Login() {
	return (
		<section className="nw-auth-section">
			<div className="nw-auth-container">
				<h2 className="nw-auth-title">Вход</h2>
				<form className="nw-auth-form">
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="login-email">
							Электронная почта
						</label>
						<input
							className="nw-auth-input"
							id="login-email"
							autoComplete="email"
							type="email"
							name="identifier"
						/>
					</div>
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="login-password">
							Пароль
						</label>
						<input
							className="nw-auth-input"
							id="login-password"
							autoComplete="current-password"
							type="password"
							name="password"
						/>
					</div>
					<button className="nw-auth-button" type="submit">
						Войти
					</button>
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
