import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import Page from "../views/PageView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page/:name",
    name: "Page",
    component: Page,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
