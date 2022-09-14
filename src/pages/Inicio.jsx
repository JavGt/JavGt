import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Quote from '../components/Quote';
import Skills from '../components/Skills';

const Inicio = () => {
	return (
		<>
			<Hero />
			<Quote />
			<Skills />
			<Projects limit={6} />
		</>
	);
};

export default Inicio;
