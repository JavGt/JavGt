import './WrapperSlider.scss';
import { useRef, useEffect, useState } from 'react';
import { clsx } from 'clsx';

export interface WrapperSliderInterface {
	children?: React.ReactNode;
}

const WrapperSlider: React.FC<WrapperSliderInterface> = ({ children }) => {
	const [isScrollingLeft, setIsScrollingLeft] = useState(false);
	const [isScrollingRight, setIsScrollingRight] = useState(false);

	const sliderRef = useRef<HTMLDivElement>(null);

	const handleWheel = (e: WheelEvent) => {
		e.preventDefault();

		const x = e.deltaY;
		const y = e.deltaX;

		sliderRef.current!.scrollLeft += x ? x : y;
	};

	const handleScroll = () => {
		const slider = sliderRef.current;
		if (!slider) return;

		const scrollLeft = slider.scrollLeft;
		const scrollWidth = slider.scrollWidth;
		const clientWidth = slider.clientWidth;

		setIsScrollingLeft(scrollLeft > 0);
		setIsScrollingRight(scrollLeft + clientWidth < scrollWidth);
		// Hacer un scroll infinito
	};

	useEffect(() => {
		const slider = sliderRef.current;
		if (!slider) return;

		const scrollWidth = slider.scrollWidth;
		const clientWidth = slider.clientWidth;

		setIsScrollingRight(scrollWidth > clientWidth);

		slider.addEventListener('wheel', handleWheel);

		return () => {
			slider.removeEventListener('wheel', handleWheel);
		};
	}, []);

	return (
		<>
			<div
				className={clsx('wrapper-slider', {
					'wrapper-slider__scrolling-left': isScrollingLeft,
					'wrapper-slider__scrolling-right': isScrollingRight,
				})}
			>
				<div onScroll={handleScroll} ref={sliderRef} className='wrapper-slider__slider'>
					{children}
				</div>
			</div>
		</>
	);
};

export default WrapperSlider;
