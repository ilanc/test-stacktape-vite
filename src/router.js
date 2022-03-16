import { createRouter, createWebHistory } from "vue-router";
import Blank from "./views/Blank.vue";
import Blog from "./views/Blog.vue";
import Docs from "./views/Docs.vue";
import Examples from "./views/Examples.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Blank",
    component: Blank,
    meta: { layout: "empty" },
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: { layout: "empty" },
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs,
  },
  {
    path: "/examples",
    name: "Examples",
    component: Examples,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(/*process.env.BASE_URL*/),
  routes,
});

export default router;
