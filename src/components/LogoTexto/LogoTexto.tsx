import React from 'react';
import { HeaderContext } from '@src/context/header.context';

import { Link } from 'react-router-dom';
import styles from './styles/LogoTexto.module.scss';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const LogoTexto = () => {
	const { handleOpen, isOpen } = React.useContext(HeaderContext);
	return (
		<div className={styles.LogoTexto}>
			<Link to='/'>
				{'{'} Javier <span>Baez Gutierrez</span> {'}'}
			</Link>
			<button className={styles.LogoTexto__button} onClick={handleOpen} type='button'>
				{isOpen ? <MdClose /> : <HiMenuAlt3 />}
			</button>
		</div>
	);
};

export default LogoTexto;
