// ToggleMenu.tsx
'use client';

import { useState } from 'react';
interface Props {
	className?: string;
	children: React.ReactNode;
}
export default function ToggleMenu({ className, children }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<div className={open ? `${className} menu-open` : className}>
			{children}
			<button
				onClick={() => setOpen((prev) => !prev)}
				aria-label="Открыть меню"
				className={open ? `toggle-btn on` : 'toggle-btn'}>
				<span />
			</button>
		</div>
	);
}
