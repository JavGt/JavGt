import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3000,
		open: true,
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, './src'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@components': path.resolve(__dirname, './src/components'),
			'@scss': path.resolve(__dirname, './src/scss/global'),
		},
	},
});
