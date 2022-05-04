import { createApp } from "vue";
import App from "./App.vue";
import { egalWidgets } from "@egalteam/widget-library";
import "@egalteam/widget-library/dist/style.css";

const app = createApp(App);
app.mount("#app");
app.use(egalWidgets);
