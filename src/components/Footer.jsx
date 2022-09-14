import '../sass/styledComponents/Footer.scss';
import imgFacebook from '../img/sociales/facebook.png';
import imgInstagram from '../img/sociales/instagram.png';
import imgTwitter from '../img/sociales/twitter.png';
import imgLinkedin from '../img/sociales/linkedin.png';
import imgGitHub from '../img/sociales/git.png';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className='footer'>
			<div className='footer__contenido container'>
				<div className='footer__grid'>
					<div className='footer__bloque'>
						<h2 className='footer__heading'>PROFILE</h2>
						<div className='footer__texto'>
							<p>
								Francisco Javier, student at the end of the career "Information
								Technology Engineering", Front-end developer, passionate, with
								constant search to learn more to get ahead.
							</p>
						</div>
					</div>
					<div className='footer__bloque'>
						<h2 className='footer__heading'>ACHIEVEMENTS</h2>
						<div className='footer__texto'>
							<ul>
								<li>CCNA Routing and Switching Certificate of Completion </li>
								<li>
									Certificate of professional reception (Professional license in
									computer equipment maintenance)
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
				<div className='redes-sociales'>
					<a
						target='__blank'
						href='https://www.facebook.com/profile.php?id=100067466634769'
					>
						<img src={imgFacebook} alt='contacto Facebook' />
					</a>
					<a
						target='__blank'
						href='https://www.instagram.com/jav_gttz/?hl=es-la'
					>
						<img src={imgInstagram} alt='contacto instagram' />
					</a>
					<a target='__blank' href='https://twitter.com/Jav_Gt'>
						<img src={imgTwitter} alt='contacto Twitter' />
					</a>
					<a
						target='__blank'
						href='https://www.linkedin.com/in/francisco-javier-b%C3%A1ez-guti%C3%A9rrez-01091420b/'
					>
						<img src={imgLinkedin} alt='contacto Linkedin' />
					</a>
					<a target='__blank' href='https://github.com/JavGt/'>
						<img src={imgGitHub} alt='contacto GitHub' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
