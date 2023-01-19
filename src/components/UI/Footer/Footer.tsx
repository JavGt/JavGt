import './Footer.scss';
import socials from '@/data/sociales.json';
import { Social } from '../../../types/types';

interface FooterProps {
	socials: Social[];
}

const Footer = ({ socials }: FooterProps) => {
	return (
		<footer className='footer '>
			<span className='footer__text'>
				Sígueme en mis <strong>redes sociales</strong> para estar al tanto de mis futuras
				publicaciones.
			</span>

			<div className='footer__socials'>
				{socials.map(social => (
					<a
						aria-label={social.name}
						title={social.name}
						target='_blank'
						key={social._id}
						href={social.link}
						className='footer__social'
					>
						<img src={social.icon} alt={social.name} />
					</a>
				))}
			</div>
			<span className='footer__copyright'>
				Hecho por <strong>&#64;JavGttz</strong> - &copy; {new Date().getFullYear()}
			</span>
		</footer>
	);
};

Footer.defaultProps = {
	socials: socials.socials,
};

export default Footer;
