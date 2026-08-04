import {
	CommentDataRequest,
	ForgotPasswordRequest,
	RegisterRequest,
	ResetPasswordRequest,
} from '@/types';
import { stringify } from 'querystring';

// export async function getMeClient() {
// 	try {
// 		const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/me`, {
// 			method: 'GET',
// 			credentials: 'include', // Браузер автоматически прикрепит куки к запросу
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});

// 		if (!response.ok) {
// 			return null;
// 		}

// 		return await response.json();
// 	} catch (error) {
// 		console.error('Failed to fetch user on client:', error);
// 		return null;
// 	}
// }

export async function getMeClient() {
	try {
		const response = await fetch('/api/me');
		if (!response.ok) return null;
		return await response.json();
	} catch {
		return null;
	}
}

export async function registerUser(data: RegisterRequest) {
	const response = await fetch('/api/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	const result = await response.json();

	if (!response.ok) {
		throw new Error(result.error?.message ?? 'Registration failed');
	}

	return result;
}

export async function login(identifier: string, password: string) {
	const response = await fetch('/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			identifier,
			password,
		}),
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.error?.message ?? 'Login error');
	}

	return data;
}

export async function logout() {
	const response = await fetch('/api/logout', {
		method: 'POST',
	});

	if (!response.ok) {
		throw new Error('Logout failed');
	}
}

export async function forgotPassword(dataForgot: ForgotPasswordRequest) {
	const { email } = dataForgot;

	const response = await fetch('/api/forgot-password', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
		}),
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.error?.message ?? 'forgot-password error');
	}

	return data;
}

export async function resetPassword(dataReset: ResetPasswordRequest) {
	const { password, passwordConfirmation, code } = dataReset;

	const response = await fetch('/api/reset-password', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			password,
			passwordConfirmation,
			code,
		}),
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.error?.message ?? 'reset-password error');
	}

	return data;
}

export async function leaveComment(commentData: CommentDataRequest) {
	const response = await fetch('/api/leave-comment', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data: commentData }),
	});

	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.error?.message ?? 'leave-comment error');
	}

	return data;
}
export async function editComment(commentData: CommentDataRequest, commentId: string) {
	const response = await fetch('/api/edit-comment', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data: { ...commentData, isApproved: true }, id: commentId }),
	});

	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.error?.message ?? 'edit-comment error');
	}

	return data;
}
