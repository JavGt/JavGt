import './CardHelp.scss';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const CardHelp = () => {
	return (
		<div className='container'>
			<div className='card-help'>
				<div className='card-help__title'>¡Apoyemos!</div>

				<div className='card-help__text'>
					<strong>¿Necesitas apoyo o consultas?</strong>
					<br />
					Puedes enviarme un mensaje para apoyarte.
				</div>

				<a
					rel='noopener noreferrer'
					href='https://api.whatsapp.com/send?phone=2462383804&text=Hola, me gustaría una consultaría'
					target='_blank'
					type='button'
					title='Enviar mensaje'
					className='card-help__button'
				>
					Enviar mensaje
					<ChatBubbleOvalLeftEllipsisIcon />
				</a>
			</div>
		</div>
	);
};

export default CardHelp;
