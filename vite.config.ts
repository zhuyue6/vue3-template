import { defineConfig } from "vite";
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
});
