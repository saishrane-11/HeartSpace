import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:"true",
    proxy:{'/api':'http://localhost:3000'}
  },
  plugins: [react()],
})
