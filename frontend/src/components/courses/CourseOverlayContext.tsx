'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

type CourseOverlayContextType = {
	startLoading: () => void;
};

const CourseOverlayContext = createContext<CourseOverlayContextType | null>(null);

export function useCourseOverlayContext() {
	const context = useContext(CourseOverlayContext);
	if (!context) {
		throw new Error('useCourseOverlayContext must be used within CourseOverlay');
	}
	return context;
}

type Props = {
	children: React.ReactNode;
};

export default function CourseOverlayProvider({ children }: Props) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const startLoading = () => setIsLoading(true);

	// Когда URL изменился и новые данные приехали — снимаем оверлей
	useEffect(() => {
		setIsLoading(false);
	}, [pathname, searchParams]);

	return (
		<CourseOverlayContext.Provider value={{ startLoading }}>
			<div className={`nw-courses-wrapper ${isLoading ? 'is-loading' : ''}`}>{children}</div>
		</CourseOverlayContext.Provider>
	);
}
