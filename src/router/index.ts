import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Merch from "../views/Merch.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/merch",
    name: "Merch",
    component: Merch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
