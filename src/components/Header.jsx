import { Outlet, Link, useLocation } from 'react-router-dom';

// Components
import Navegacion from './Navegacion';
// Hook
import { useState } from 'react';
// Styles
import '../sass/styledComponents/Header.scss';
import { Notice } from './Notice';

const LogoTexto = () => {
	return (
		<Link to='/'>
			{'{'} Javier <span>Baez Gutierrez</span> {'}'}
		</Link>
	);
};

const Header = () => {
	// States
	const [verNav, setVerNav] = useState(false);
	const [scroll, setScroll] = useState(false);

	window.addEventListener('scroll', function (e) {
		if (window.scrollY > 0) {
			setScroll(true);
			setVerNav(false);

			return;
		}

		setScroll(false);
	});

	const handleNav = () => {
		setVerNav(!verNav);
	};

	return (
		<>
			<header
				className={`header 
			${verNav ? 'abierto' : 'cerrado'} 
			${scroll ? 'scroll' : ''} `}>
				<Notice />

				<div
					className={` header__contenido container 
				${verNav ? 'abierto' : 'cerrado'} `}>
					<div className='header__logo'>
						<LogoTexto />

						<button onClick={handleNav} className='btn__ham '>
							boton de navegacion
							<span className='btn__ham-1'></span>
							<span className='btn__ham-2'></span>
						</button>
					</div>

					<Navegacion tipo={'header'} />
				</div>
			</header>
		</>
	);
};

export default Header;
