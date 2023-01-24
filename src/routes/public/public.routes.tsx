import { Layout } from '@/components/UI/Layout';
import { Demo } from '@/pages/Demo';
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
	{
		path: '/demo',
		element: <Demo />,
	},
];
