import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/scss/main.scss';

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
