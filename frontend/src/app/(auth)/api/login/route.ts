import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const body = await request.json();

	const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	const data = await response.json();

	if (!response.ok) {
		return NextResponse.json(data, {
			status: response.status,
		});
	}

	// 30 дней в секундах (60 sec * 60 min * 24 hours * 30 days)
	const MAX_AGE = 60 * 60 * 24 * 30;

	(await cookies()).set('jwt', data.jwt, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
		maxAge: MAX_AGE,
	});

	return NextResponse.json({
		user: data.user,
	});
}
