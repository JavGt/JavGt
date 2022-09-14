import styles from './styles/Home.module.scss';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return (
		<div className={styles.Home}>
			<div>Home</div>
		</div>
	);
};

export default Home;
