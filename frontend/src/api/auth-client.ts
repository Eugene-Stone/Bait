import { ForgotPasswordRequest, RegisterRequest, ResetPasswordRequest } from '@/types';

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
