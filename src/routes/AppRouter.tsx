import { Layout } from '@components/Layout';
import { Home } from '@pages/Home';
import { NotFound } from '@src/pages/NotFound';
import { Skills } from '@src/pages/Skills';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes.adapter';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
					<Route path={ROUTES.SKILLS} element={<Skills />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default AppRouter;
