import './Layout.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { CardHelp } from '../CardHelp';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<CardHelp />
			<Footer />
		</>
	);
};

export default Layout;
