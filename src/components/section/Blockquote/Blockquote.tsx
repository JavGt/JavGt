import './Blockquote.scss';

const Blockquote = () => {
	return (
		<div className='container'>
			<div className='blockquote'>
				<blockquote>
					"El fracaso es una opción. Si las cosas no están fallando, no estás innovando lo
					suficiente"
					<hr />
					<cite>-Elon Musk</cite>
				</blockquote>
			</div>
		</div>
	);
};

export default Blockquote;
