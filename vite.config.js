import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use Render's port or default to 3000
    strictPort: true, // Ensures Vite runs on the specified port
    host: '0.0.0.0', // Required for Render deployment
  },
});
