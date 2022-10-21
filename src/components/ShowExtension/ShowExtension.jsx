import React from 'react';
import './ShowExtension.scss';
import ReactDOM from 'react-dom';
import { SiReact } from 'react-icons/si';
import logoExtension from '@/img/extensions/icon.png';

const ShowExtension = () => {
	const [isCreated, setIsCreated] = React.useState(false);

	const id = 'popup-cookie';

	const ref = React.useRef(null);

	// Crear un portal y renderizarlo en el body antes de que se crea el div con id root

	const handleExit = () => {
		// localStorage.setItem('showExtension', 'true');
		document.body.style.overflow = 'auto';
		ref.current.style.animation = 'exit 0.5s ease-in-out';
		ref.current.addEventListener('animationend', () => {
			setIsCreated(false);
			document.body.removeChild(document.getElementById(id));
		});
	};

	React.useEffect(() => {
		window.addEventListener('keydown', e => e.key === 'Escape' && handleExit());

		return () =>
			window.removeEventListener('keydown', e => e.key === 'Escape' && handleExit());
	}, []);

	React.useLayoutEffect(() => {
		// const isSaved = localStorage.getItem('showExtension');
		// if (isSaved === 'true') return;

		const popupCookie = document.createElement('div');
		popupCookie.setAttribute('id', id);
		document.body.appendChild(popupCookie);
		// document.body.style.overflow = 'hidden';

		setIsCreated(true);

		return () => document.body.removeChild(popupCookie);
	}, []);

	const handleInstall = () => {
		window.open(
			'https://marketplace.visualstudio.com/items?itemName=JavierGutierrez.create-component-React'
		);
		handleExit();
	};

	if (!isCreated) return null;

	return ReactDOM.createPortal(
		<div className='popupCookie'>
			<div className='popupCookie__overlay'>
				<div ref={ref} className='popupCookie__popup'>
					<div className='container popupCookie__content'>
						<div className='popupCookie__img'>
							<img
								src={logoExtension}
								alt='Extension de Chrome para ver el código de los componentes de React'
							/>
						</div>
						<div className='popupCookie__meta'>
							<h3>
								¿Te gusta React?{' '}
								<span aria-label='logo'>
									<SiReact size={30} color={'#61dafb'} />
								</span>
							</h3>
							<p className='popupCookie__text'>
								Descarga la extension para crear tus componentes de la forma mas rápida.
								🚀
							</p>

							<a
								className='popupCookie__action'
								href='https://github.com/JavGt/Create-component/blob/main/README.md'
								target={'_blank'}>
								Leer instrucciones
							</a>
						</div>

						<div className='popupCookie__buttons'>
							<button onClick={handleInstall} className='popupCookie__btn'>
								Ir a marketplace
							</button>
							<button
								onClick={handleExit}
								className='popupCookie__btn popupCookie__btn--close'>
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById(id)
	);
};

export default ShowExtension;
