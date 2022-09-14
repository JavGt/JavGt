import '../sass/styledComponents/Skill.scss';

const Skill = ({ nombre, url }) => {
	return (
		<div className='tecnologia'>
			<img src={url} alt={`imagen ${nombre}`} />
			<p>{nombre}</p>
		</div>
	);
};

export default Skill;
