import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Merch from "../views/Merch.vue";
import Epk from "../views/Epk.vue";

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
  {
    path: "/epk",
    name: "Epk",
    component: Epk,
    meta: {
      epk: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
