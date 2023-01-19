import { CardProject } from '@/components/UI/CardProject';
import { projects } from '@/constants';
import './Projects.scss';

const Projects = () => {
	return (
		<div className='projects'>
			{projects.map(project => (
				<CardProject project={project} key={project._id} />
			))}
		</div>
	);
};

export default Projects;
