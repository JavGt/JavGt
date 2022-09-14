import '../sass/styledComponents/Projects.scss';
import { Proyectos, skills } from '../objetos';
import Project from './Project';
import Aside from './Aside';
import styled from '@emotion/styled';
import React, { useState } from 'react';

const Projects = React.memo(({ limit }) => {
	const [img, setImg] = useState('');
	const [click, setClick] = useState('');

	const cursorRamdom = () => {
		const cantidad = Number(skills.length);
		const ramdow = Math.floor(Math.random() * cantidad);

		setImg(skills[ramdow].img);
	};

	let DivPro = styled.div`
		@media (min-width: 1024px) {
			cursor: url(${img}), pointer;
		}
	`;

	let proyectosLimite = [];

	if (limit) {
		for (let index = 0; index < limit; index++) {
			proyectosLimite[index] = Proyectos[index];
		}
	}

	return (
		<DivPro className='Projects' id='Projects' onMouseEnter={cursorRamdom}>
			<div className='Projects__contenido container'>
				<h2>Projects</h2>

				<div className='proyectos'>
					<Aside Proyectos={Proyectos} limit={limit} setClick={setClick} />

					<div className='proyectos__grid'>
						{limit
							? proyectosLimite.map(proyecto => (
									<Project key={proyecto.id} proyecto={proyecto} />
							  ))
							: Proyectos.map(proyecto => (
									<Project
										click={click}
										key={proyecto.id}
										proyecto={proyecto}
									/>
							  ))}
					</div>
				</div>
			</div>
		</DivPro>
	);
});

export default Projects;
