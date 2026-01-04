import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'

const key = readFileSync("./.certs/example.localhost+1-key.pem")
const cert = readFileSync("./.certs/example.localhost+1.pem")

const config = defineConfig({
  server: {
    https: {
      key,
      cert,
    },
    port: 443
  },

  preview: {
    https: {
      key,
      cert,
    },
    port: 443
  },
  plugins: [
    devtools(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true
      }
    }),
    viteReact(),
  ],
})

export default config
