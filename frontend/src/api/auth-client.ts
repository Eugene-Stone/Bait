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
