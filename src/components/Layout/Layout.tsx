import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Fragment } from 'react';

import { Outlet } from 'react-router-dom';

const Layout = () => (
	<Fragment>
		<Header />
		<Outlet />
		<Footer />
	</Fragment>
);

export default Layout;
