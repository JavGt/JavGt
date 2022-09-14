import IconSKILLS from '../img/icons/SKILLS.png';
import IconContact from '../img/icons/Contact.png';
import IconProjects from '../img/icons/Projects.png';
import IconAbout from '../img/icons/About.png';
import BtnCv from './BtnCv';
import { Link, useLocation } from 'react-router-dom';

import '../sass/styledComponents/Navegacion.scss';

const Navegacion = () => {
	const navigation = useLocation();
	return (
		<>
			<nav className='navegacion'>
				{navigation.pathname === '/' ? (
					<a className='navegacion__link' href='#skills'>
						<p>TOOLS</p>
						<img className='navegacion__link__icon' src={IconSKILLS} alt='' />
					</a>
				) : (
					<Link className='navegacion__link' to='/#skills'>
						<p>TOOLS</p>
						<img className='navegacion__link__icon' src={IconSKILLS} alt='' />
					</Link>
				)}

				<Link className='navegacion__link' to='/projects'>
					<p>Projects</p>
					<img className='navegacion__link__icon' src={IconProjects} alt='' />
				</Link>
				<a className='navegacion__link' href='#'>
					<p>About Me</p>
					<img className='navegacion__link__icon' src={IconAbout} alt='' />
				</a>
				<a className='navegacion__link' href='#'>
					<p>Contact</p>
					<img className='navegacion__link__icon' src={IconContact} alt='' />
				</a>
			</nav>
			<BtnCv />
		</>
	);
};

export default Navegacion;
