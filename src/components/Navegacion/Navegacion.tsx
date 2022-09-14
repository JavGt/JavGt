import React from 'react';
// React router dom
import { NavLink } from 'react-router-dom';
// scss
import styles from './styles/Navegacion.module.scss';
// icons
import { GoTools } from 'react-icons/go';
import { SiNounproject } from 'react-icons/si';
import { HiUser, HiPhone, HiHome } from 'react-icons/hi';
import { HeaderContext } from '@src/context/header.context';

const Navegacion = () => {
	const { isOpen } = React.useContext(HeaderContext);

	const handleActive = ({ isActive }: { isActive: boolean }) =>
		styles['Navegacion__link'] +
		(isActive ? ` ${styles['Navegacion__link--active']}` : '');

	return (
		<nav className={`${styles.Navegacion} ${isOpen ? styles.open : ''}`}>
			<NavLink className={handleActive} to='/'>
				<div className={styles.Navegacion__link__icon}>
					<HiHome />
				</div>
				<p>Home</p>
			</NavLink>
			<NavLink className={handleActive} to='skills'>
				<div className={styles.Navegacion__link__icon}>
					<GoTools />
				</div>
				<p>skills</p>
			</NavLink>
			<NavLink className={handleActive} to='projects'>
				<div className={styles.Navegacion__link__icon}>
					<SiNounproject />
				</div>
				<p>Projects</p>
			</NavLink>
			<NavLink className={handleActive} to='aboutMe'>
				<div className={styles.Navegacion__link__icon}>
					<HiUser />
				</div>
				<p>About</p>
			</NavLink>
			<NavLink className={handleActive} to='contact'>
				<div className={styles.Navegacion__link__icon}>
					<HiPhone />
				</div>
				<p>Contact</p>
			</NavLink>
		</nav>
	);
};

export default Navegacion;
