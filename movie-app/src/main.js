import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import "flowbite";
import App from "./App.vue";
import { router } from "./routes";

createApp(App).use(router).mount("#app");
