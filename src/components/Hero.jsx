import { useEffect } from 'react';
import heroImg from '../img/audrey-amaro-qgViEVE8cfA-unsplash.jpg';
import baffle from 'baffle';
import Wave from '../img/wave.svg';

import '../sass/styledComponents/Hero.scss';

const Hero = () => {
	useEffect(() => {
		let baffleEffect = baffle('.baffle');
		baffleEffect.set({
			characters: '▒█/ /░<░█ ░/>█▒ █/▒ ▓<▓░▓ ▒█>< /▒▒ >▓>> >░>█',
			speed: 220,
			loopCount: false,
			loop: true,
		});

		baffleEffect.start();
		baffleEffect.reveal(4000);
	}, []);

	return (
		<div>
			<div className='hero' id='hero'>
				<img src={heroImg} alt='imagen hero' />

				<div className='hero__contenido'>
					<div className='hero__grid'>
						<div className='texto__contendio'>
							<span className='line-1'></span>
							<span className='line-2'></span>

							<p className='titulo baffle'>I am Front-End Developer</p>
							<p className='ubicacion baffle'>T l a x c a l a, M x</p>

							<span className='line-3'></span>
							<span className='line-4'></span>
						</div>
					</div>
				</div>
				<a href='#quote' className='lik_1'>
					⥥
				</a>
			</div>
			<img src={Wave} alt='imagen wave' className='hero__wave' />
		</div>
	);
};

export default Hero;
