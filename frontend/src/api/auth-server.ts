import { cookies } from 'next/headers';

export async function getMe() {
	const cookieStore = await cookies();
	const token = cookieStore.get('jwt')?.value;

	if (!token) {
		return null;
	}

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/me?populate=*`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
				cache: 'no-store', // Отключаем fetch-кэш
			},
		);

		if (!response.ok) {
			return null;
		}

		return await response.json();
	} catch (error) {
		console.error('Failed to fetch user:', error);
		return null;
	}
}
