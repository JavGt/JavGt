import './Hero.scss';
import avatar from '/image/avatar/man-playing-video-game.svg';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import CV from '@/docs/pdf/Francisco_Javier_Baez_Gutierrez_Curriculum.pdf';

const Hero = () => {
	return (
		<div className='container'>
			<div className='hero'>
				<div className='hero__text'>
					<span className='hero__title'>
						Front-end developer &<br></br>
						Mentor
						<hr />
					</span>

					<p className='hero__description'>
						Desarrollo <strong>sitios web</strong> profesionales, adaptables a cualquier
						dispositivo.
					</p>
					<a
						href={CV}
						target='_blank'
						title='Descargar CV'
						type='button'
						className='hero__button'
					>
						Descargar CV
						<ArrowDownOnSquareIcon className='hero__button-icon' />
					</a>
				</div>

				<img className='hero__image' src={avatar} alt='Avatar' />
			</div>
		</div>
	);
};

export default Hero;
