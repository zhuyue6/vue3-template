import { createApp } from "vue";
import App from "./app.vue";
import ElementPlus from "element-plus";
import router from "./router";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import "./index.less";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
