import '../sass/styledComponents/Skills.scss';
import Skill from './Skill';

import { skills } from '../objetos';

const Skills = () => {
	return (
		<div className='skills' id='skills'>
			<div className='container'>
				<h2>
					TOOLS <span>AND</span> LANGUAGES
				</h2>

				<div className='tecnologias' >
					{skills.map(skill => (
						<Skill key={skill.id} nombre={skill.nombre} url={skill.img} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
