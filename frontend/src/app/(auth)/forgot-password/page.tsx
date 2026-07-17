import Link from 'next/link';

export default function page() {
	return (
		<section className="nw-auth-section">
			<div className="nw-auth-container">
				<h2 className="nw-auth-title">Восстановление пароля</h2>
				<form className="nw-auth-form">
					<div className="nw-auth-group">
						<label className="nw-auth-label" htmlFor="forgot-email">
							Электронная почта
						</label>
						<input
							className="nw-auth-input"
							id="forgot-email"
							autoComplete="email"
							type="email"
							name="email"
						/>
					</div>
					<button className="nw-auth-button" type="submit">
						Сбросить пароль
					</button>
				</form>
				<div className="nw-auth-links">
					<Link className="nw-auth-link" href="/login" data-discover="true">
						Вернуться к авторизации
					</Link>
				</div>
			</div>
		</section>
	);
}
