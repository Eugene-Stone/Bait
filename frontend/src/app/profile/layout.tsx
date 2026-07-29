import { getMe } from '@/api/auth-server';
import { redirect } from 'next/navigation';
import { ViewTransition } from 'react';
import Menu from '@/components/profile/Menu';
// import { logout } from '@/api/auth-client';

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = await getMe();
	if (!user) {
		redirect('/login');
	}

	return (
		<section className="nw-profile-section">
			<div className="nw-profile-container">
				<h2 className="nw-auth-title">Личный кабинет</h2>
				<div className="nw-profile-grid">
					<aside className="nw-profile-sidebar">
						<Menu />
					</aside>
					<main className="nw-profile-content">
						<ViewTransition>{children}</ViewTransition>
					</main>
				</div>
			</div>
		</section>
	);
}
