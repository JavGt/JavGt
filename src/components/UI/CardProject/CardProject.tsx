import { Project } from '@/types';
import './CardProject.scss';

export interface CardProjectInterface {
	project: Project;
}

const CardProject: React.FC<CardProjectInterface> = ({ project }) => {
	return (
		<div className='card-project'>
			<picture>
				<img className='card-project__image' src={project.image} alt={project.name} />
			</picture>
		</div>
	);
};

export default CardProject;
