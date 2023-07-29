import { createRouter, createWebHistory } from "vue-router";

import Epk from "../views/Epk.vue";
import Gallery from "../views/Gallery.vue";
import Home from "../views/Home.vue";
import LoginEpk from "../views/LoginEpk.vue";
import Merch from "../views/Merch.vue";

import { useIdentityStore } from "../stores/useIdentity";

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
    path: "/login",
    name: "LoginEpk",
    component: LoginEpk,
    meta: {
      login: true,
      epk: true,
    },
  },
  {
    path: "/epk",
    name: "Epk",
    component: Epk,
    meta: {
      requiresAuth: true,
      epk: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

router.beforeEach(async (to, from, next): Promise<void> => {
  if (!to.matched.some(record => record.meta.requiresAuth)) {
    console.debug("[Router] Auth not required.");

    next();
    return;
  }

  const store = useIdentityStore();
  if (!store.isLoggedIn) {
    console.debug("[Router] User not logged in.");

    next({ name: "LoginEpk" });
    return;
  }

  console.debug("[Router] User logged in.");
  next();
});

export default router;
