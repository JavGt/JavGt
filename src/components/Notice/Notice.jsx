import React from 'react';
import './Notice.scss';
import { IoCloseOutline } from 'react-icons/io5';

const Notice = () => {
	const [showNotice, setShowNotice] = React.useState(true);
	const ref = React.useRef(null);

	const handleClose = () => {
		console.log('close');
		ref.current.style.animation = 'slideOut 0.5s ease-in-out';

		ref.current.addEventListener('animationend', () => setShowNotice(false));
	};

	if (!showNotice) return null;

	return (
		<div ref={ref} className='notice'>
			<div className='container'>
				<div className='notice__content'>
					<span>Este sitio web esta en construcción 🚀</span>
					<IoCloseOutline onClick={handleClose} className='notice__close' />
				</div>
			</div>
		</div>
	);
};

export default Notice;
