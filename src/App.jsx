import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Inicio from './pages/Inicio';
import PageProyects from './pages/PageProyects';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Inicio />} />
					<Route path='projects' element={<PageProyects />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
