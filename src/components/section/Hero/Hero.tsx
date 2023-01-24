import './Hero.scss';
import avatar from '/image/avatar/man-playing-video-game.svg';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import CV from '@/docs/pdf/Francisco_Javier_Baez_Gutierrez_Curriculum.pdf';

const Hero = () => {
	return (
		<section className='hero'>
			<div className=' hero__content container'>
				<div className='hero__information'>
					<span className='hero__title'>
						Front-end <strong className='suffix'>developer</strong>
					</span>

					<hr />

					<p className='hero__description'>
						Desarrollo <strong>sitios web</strong> profesionales, adaptables a cualquier
						dispositivo. 🚀
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

				<picture className='hero__image'>
					<img src={avatar} alt='Avatar' />
				</picture>
			</div>
		</section>
	);
};

export default Hero;
