'use client';

import { useEffect } from 'react';

export default function HomeDetect() {
	useEffect(() => {
		document.body.classList.add('home-page');

		return () => {
			document.body.classList.remove('home-page');
		};
	}, []);

	return null;
}
