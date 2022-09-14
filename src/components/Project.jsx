import React from 'react';
import imgGit from '../img/skills/git.webp';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import '../sass/styledComponents/Project.scss';
import Li from './Li';

const Project = ({ proyecto, click }) => {
	const navigate = useNavigate();

	const Fondo = styled.div`
		background: url(${proyecto.fondo});
		background-size: cover;
		background-position: center;
	`;

	return (
		<div className='proyecto' id={proyecto.nombre}>
			<a target='_blank' href={proyecto.url}>
				<Fondo
					className={`proyecto__img ${
						click === proyecto.nombre ? 'activo' : ''
					}`}
				>
					<div className='proyecto__informacion'>
						<div className='proyecto__texto'>
							<p className='proyecto__heading'>{proyecto.nombre}</p>
							<p className='proyecto__tecnologias'>Technologies</p>

							<ul>
								{proyecto.tecnologias.map(tecnologia => (
									<Li key={tecnologia.id} tecnologia={tecnologia} />
								))}
							</ul>
						</div>
						{proyecto.git && (
							<div
								className='acciones'
								onClick={e => {
									e.preventDefault();
									window.location.href = proyecto.git;
								}}
							>
								<img src={imgGit} alt='' />
							</div>
						)}
					</div>
				</Fondo>
			</a>
		</div>
	);
};

export default Project;
