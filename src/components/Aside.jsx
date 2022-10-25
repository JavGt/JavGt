import React from 'react';
import '../sass/styledComponents/Aside.scss';
import { Link } from 'react-router-dom';
import imgGit from '../img/skills/git.webp';

const Aside = ({ Proyectos, limit, setClick }) => {
	const handleClick = nombre => {
		setClick(nombre);
	};
	return limit > 0 ? (
		<Link className='Btn_ver' to='/projects'>
			See more projects
		</Link>
	) : (
		<aside className='aside'>
			<h3>Index</h3>
			<div className='proyectos'>
				<ul>
					{Proyectos.map(proyecto => (
						<li key={proyecto.id}>
							<a
								onClick={() => {
									handleClick(proyecto.nombre);
								}}
								href={`#${proyecto.nombre}`}
							>
								{proyecto.nombre}
							</a>
						</li>
					))}
				</ul>
			</div>
			<a target='__blank' className='btn-git' href='https://github.com/JavGt'>
				<img src={imgGit} alt='imagen git' />
			</a>
		</aside>
	);
};

export default Aside;
