import React from 'react';

import { LogoTexto } from '@components/LogoTexto';
import { Navegacion } from '@components/Navegacion';
import { BtnCV } from '@components/BtnCV';

import styles from './styles/Header.module.scss';
import HeaderProvider from '@src/context/header.context';

const Header = () => {
	const headerRef = React.useRef<HTMLHeadingElement>(null);

	const handleScroll = () =>
		headerRef.current?.classList[window.scrollY > 0 ? 'add' : 'remove'](
			styles.Header__scrolled
		);

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<HeaderProvider>
			<header ref={headerRef} className={`${styles.Header}`}>
				<div className={`${styles.Header__contenido} container`}>
					<LogoTexto />
					<Navegacion />
					<BtnCV />
				</div>
			</header>
		</HeaderProvider>
	);
};

export default Header;
