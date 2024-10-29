
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


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
