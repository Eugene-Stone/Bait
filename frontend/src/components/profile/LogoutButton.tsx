'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/api/auth-client';

export default function LogoutButton() {
	const router = useRouter();

	async function handleClick() {
		await logout();
		router.push('/login');
		router.refresh();
	}
	return (
		<button className="nw-profile-menu-link" onClick={handleClick}>
			Выйти
		</button>
	);
}
