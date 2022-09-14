import { socialsNetworks } from '@src/constants/constants';
import { SocialNetwork } from '@src/interfaces';
import styles from './styles/Footer.module.scss';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__contenido} container`}>
				<div className={`${styles.footer__grid} `}>
					<div className={`${styles.footer__bloque}`}>
						<h2 className={`${styles.footer__heading}`}>PROFILE</h2>
						<div className='footer__texto'>
							<p>
								Francisco Javier, student at the end of the career "Information Technology
								Engineering", Front-end developer, passionate, with constant search to
								learn more to get ahead.
							</p>
						</div>
					</div>
					<div className='footer__bloque'>
						<h2 className='footer__heading'>ACHIEVEMENTS</h2>
						<div className='footer__texto'>
							<ul>
								<li>CCNA Routing and Switching Certificate of Completion </li>
								<li>
									Certificate of professional reception (Professional license in computer
									equipment maintenance)
								</li>
								<li>Courses on the "Udemy" platform.</li>
							</ul>
						</div>
					</div>
					<div className='footer__bloque'>
						<h2 className='footer__heading'>STUDIES</h2>
						<div className='footer__texto'>
							<ul>
								<li>CECyTE 15 Huactzinco</li>
								<li>Universidad Politécnica de Tlaxcala</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='footer__logo'>
					<div className='logo'>
						Javier <span>Baez Gutierrez</span>
					</div>
				</div>
			</div>
			<div className='copyrigth'>
				All rights reserved {year} &copy;
				<div className={styles['redes-sociales']}>
					{socialsNetworks.map((socialNetwork: SocialNetwork, index) => (
						<a
							key={index}
							href={socialNetwork.url}
							target='_blank'
							className='redes-sociales__link'>
							<img
								src={socialNetwork.image}
								alt={socialNetwork.alt}
								className='redes-sociales__icono'
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
