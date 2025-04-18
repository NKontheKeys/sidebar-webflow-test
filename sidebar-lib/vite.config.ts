// sidebar-lib/vite.config.ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "url"

export default defineConfig({
  // 1) Use the official React plugin
  plugins: [react()],

  // 2) Setup the '@/...' alias to point at src/
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // 3) Strip out process.env.NODE_ENV checks at build time
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },

  build: {
    lib: {
      // 4) Your library entrypoint
      entry: fileURLToPath(new URL("./src/index.tsx", import.meta.url)),
      // 5) Global name for UMD
      name: "MySidebar",
      // 6) Output filename pattern (you’ll get sidebar.bundle.umd.js)
      fileName: (format) => `sidebar.bundle.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      // 7) Don’t bundle React, ReactDOM, or ReactDOM/client
      external: ["react", "react-dom", "react-dom/client"],
      output: {
        // 8) Tell Rollup what global to expect at runtime
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-dom/client": "ReactDOMClient",
        },
      },
    },
  },
})

