import { getMe } from '@/api/auth-server';
import { NextResponse } from 'next/server';

export async function GET() {
	const user = await getMe();
	return NextResponse.json(user);
}
