import CV from '../documents/CV-FJBG.pdf';
import '../sass/styledComponents/BtnCv.scss';

const BtnCv = () => {
	return (
		<a target='_blank' href={CV} className='btnCv'>
			Download CV
			<div className='flecha'>
				<span className='f-1'></span>
				<span className='f-2'></span>
			</div>
		</a>
	);
};

export default BtnCv;
