import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/homemedcofrmaiscm/", // <--- TEM QUE SER EXATAMENTE O NOME DO REPOSITÓRIO
})