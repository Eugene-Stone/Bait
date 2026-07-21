'use client';
import { useState, useEffect } from 'react';

const ButtonScrollTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Smooth scrolling behavior
		});
	};

	// Show button when page is scrolled down
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			// Show button after scrolling 300px
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<button
			onClick={scrollToTop}
			className={`scroll-to-top ${isVisible ? 'visible' : ''}`}></button>
	);
};

export default ButtonScrollTop;
