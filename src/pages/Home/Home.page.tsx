import { Blockquote } from '@/components/section/Blockquote';
import { Hero } from '@/components/section/Hero';
import { CardHelp } from '@/components/UI/CardHelp';
import { Tabs } from '@/components/UI/Tabs';

const Home = () => {
	return (
		<main>
			<Hero />
			<hr />
			<Blockquote />
			{/* <Tabs /> */}
			<CardHelp />
		</main>
	);
};

export default Home;
