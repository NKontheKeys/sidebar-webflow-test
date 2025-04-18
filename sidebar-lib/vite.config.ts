// sidebar‑lib/vite.config.ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "url"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Bake in NODE_ENV so the browser never sees `process`
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.tsx", import.meta.url)),
      name: "MySidebar",
      fileName: (format) => `sidebar.bundle.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      // **Externalize** all React entrypoints
      external: ["react", "react-dom", "react-dom/client"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-dom/client": "ReactDOMClient",
        },
      },
    },
  },
})


