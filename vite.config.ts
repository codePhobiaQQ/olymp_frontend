// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@shared': path.resolve(__dirname, './src/components/shared'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
	plugins: [react(), svgr()],
})
