import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 8080,
  },
  plugins: [
    vuePlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
