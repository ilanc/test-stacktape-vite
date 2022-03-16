import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";
import SimpleLayout from "./components/SimpleLayout.vue";
import router from "./router.js";

const app = createApp(App);
app.component("simple-layout", SimpleLayout);
app.use(router).mount("#app");
