import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    open: true,
    port: 8080,
  },
  plugins: [
    vuePlugin(),
  ],
});
