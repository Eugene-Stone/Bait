import Link from 'next/link';
import React from 'react';

export default function Registration() {
	return (
		<section className="nw-auth-section">
			<div className="nw-auth-container">
				<h2 className="nw-auth-title">Регистрация</h2>
				<form className="nw-auth-form">
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="register-name">
							Имя
						</label>
						<input
							className="nw-auth-input"
							id="register-name"
							autoComplete="name"
							type="text"
							name="username"
						/>
					</div>
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="register-email">
							Электронная почта
						</label>
						<input
							className="nw-auth-input"
							id="register-email"
							autoComplete="email"
							type="email"
							name="email"
						/>
					</div>
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="register-password">
							Пароль
						</label>
						<input
							className="nw-auth-input"
							id="register-password"
							autoComplete="new-password"
							type="password"
							name="password"
						/>
					</div>
					<button className="nw-auth-button" type="submit">
						Зарегистрироваться
					</button>
				</form>
				<div className="nw-auth-links">
					<Link className="nw-auth-link" href="/login" data-discover="true">
						Уже есть аккаунт? Войти
					</Link>
				</div>
			</div>
		</section>
	);
}
