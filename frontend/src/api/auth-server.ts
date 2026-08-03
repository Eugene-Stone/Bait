import { cookies } from 'next/headers';
import { cache } from 'react';

// Заворачиваем функцию в React cache()
export const getMe = cache(async () => {
	const cookieStore = await cookies();
	const token = cookieStore.get('jwt')?.value;

	if (!token) {
		return null;
	}

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			cache: 'no-store', // Отключаем fetch-кэш
		});

		if (!response.ok) {
			return null;
		}

		return await response.json();
	} catch (error) {
		console.error('Failed to fetch user:', error);
		return null;
	}
});
