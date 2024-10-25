// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default {
//   build: {
//     rollupOptions: {
//       external: ['react-scroll'],
//     },
//   },
// }; 

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
// })


// // Import necessary packages
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // Merge all configurations into a single export
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,  // Define the port for local development
//   },
// });


// Import necessary packages
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Merge all configurations into a single export
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Define the port for local development
  },
  build: {
    // Specify the output directory
    outDir: 'dist',
    rollupOptions: {
      // Ensure Vite processes assets properly and includes index.html
      input: {
        main: resolve(__dirname, 'src/assets/index.html'),  // Adjusted to point to src/assets
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './',  // Ensure assets are resolved relative to the base URL
});

