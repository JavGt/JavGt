import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './routes/public/public.routes';

const App = () => {
	return (
		<>
			<RouterProvider router={createBrowserRouter(publicRoutes)} />
		</>
	);
};

export default App;
