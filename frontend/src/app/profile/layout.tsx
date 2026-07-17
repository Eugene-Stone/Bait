import Link from 'next/link';
import { ViewTransition } from 'react';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="nw-profile-section">
			<div className="nw-profile-container">
				<h2 className="nw-auth-title">Личный кабинет</h2>
				<div className="nw-profile-grid">
					<aside className="nw-profile-sidebar">
						<ul className="nw-profile-menu">
							<li className="nw-profile-menu-item">
								<Link
									className="nw-profile-menu-link nw-profile-menu-link-active"
									href="/profile/info"
									data-discover="true"
									aria-current="page">
									Профиль
								</Link>
							</li>
							<li className="nw-profile-menu-item">
								<Link
									className="nw-profile-menu-link"
									href="/profile/reviews"
									data-discover="true">
									История отзывов
								</Link>
							</li>
							<li className="nw-profile-menu-item">
								<Link
									className="nw-profile-menu-link"
									href="/profile/comments"
									data-discover="true">
									История коментариев
								</Link>
							</li>
							<li className="nw-profile-menu-item">
								<button className="nw-profile-menu-link">Выйти</button>
							</li>
						</ul>
					</aside>
					<main className="nw-profile-content">
						<ViewTransition>{children}</ViewTransition>
					</main>
				</div>
			</div>
		</section>
	);
}
