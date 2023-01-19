import { Layout } from '@/components/UI/Layout';
import { Home } from '@/pages/Home';
import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
];
