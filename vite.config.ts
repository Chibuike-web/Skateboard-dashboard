import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  css: {
    postcss: "./postcss.config.js", // Ensure this points to your PostCSS config
  },
});
