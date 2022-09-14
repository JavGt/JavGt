import React from 'react';
import Wave from '../img/wave.svg';
import '../sass/styledComponents/Quote.scss';

const Quote = () => {
	return (
		<div className='quote' id='quote'>
			<div className='quote__contenido container' >
				<p>
					"You can be whatever you want, {" "}
					<span>just become what you think you could be.</span>"
				</p>
				<p>- Freddie Mercury</p>
			</div>
		</div>
	);
};

export default Quote;
