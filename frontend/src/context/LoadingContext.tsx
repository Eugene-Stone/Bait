'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

type LoadingContextType = {
	startLoading: () => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function useLoadingContext() {
	const context = useContext(LoadingContext);
	if (!context) {
		throw new Error('useLoadingContext must be used within LoadingContext');
	}
	return context;
}

type Props = {
	className: string;
	children: React.ReactNode;
};

export default function LoadingContextProvider({ className, children }: Props) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const startLoading = () => setIsLoading(true);

	// Когда URL изменился и новые данные приехали — снимаем оверлей
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 100);
	}, [pathname, searchParams]);

	return (
		<LoadingContext.Provider value={{ startLoading }}>
			<div className={`${className} ${isLoading ? 'is-loading' : ''}`}>{children}</div>
		</LoadingContext.Provider>
	);
}
