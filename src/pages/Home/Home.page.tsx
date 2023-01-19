import { Hero } from '@/components/section/Hero';
import { Tabs } from '@/components/UI/Tabs';
import './Home.page.scss';

const Home = () => {
	return (
		<div className='home'>
			<Hero />
			<hr />
			<div className='container'>
				<Tabs />
			</div>
		</div>
	);
};

export default Home;
