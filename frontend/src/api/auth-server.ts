import { cookies } from 'next/headers';

export async function getMe() {
	const token = (await cookies()).get('jwt')?.value;

	if (!token) {
		return null;
	}

	const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/me`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cache: 'no-store',
	});

	if (!response.ok) {
		return null;
	}

	return response.json();
}
