/// <reference types="vitest" />
import { defineConfig, type UserConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  base: '/car-showroom/',

  plugins: [
    react(),
    babel({ 
      presets: [reactCompilerPreset()] 
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  }
} as UserConfig)