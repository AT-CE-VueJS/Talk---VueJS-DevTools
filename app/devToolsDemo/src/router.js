import { createRouter, createWebHistory } from "vue-router";
import About from "./components/About.vue";
import Credits from "./components/Credits.vue";

const routes = [
    { path: "/about", component: About },
    { path: "/credits/:name", component: Credits, props: { year: 2022 } },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;
