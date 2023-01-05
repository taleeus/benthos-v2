<script setup lang="ts">
import { ref } from "vue";
import { RouteInfo } from "../types/routes.types";
import { useScreenStore } from "../stores/useScreen";
import { storeToRefs } from "pinia";

defineProps<{
  routes: RouteInfo[];
}>();

const { isMobile } = storeToRefs(useScreenStore());

const mobileNav = ref(false);
const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};
</script>

<template>
  <header class="fixed z-50 h-16 w-full bg-white transition-all duration-500">
    <nav
      class="my-auto flex justify-between px-4 py-1.5 text-black transition-all duration-500 lg:px-16 lg:py-1"
    >
      <router-link class="w-[180px]" :to="{ name: 'Home' }">
        <img src="/assets/logos/logo.svg" alt="logo" />
      </router-link>
      <ul v-show="!isMobile" class="flex">
        <li v-for="route in routes" class="mx-6 p-4 uppercase">
          <router-link
            class="no-underline hover:text-brown"
            :to="{ name: `${route.componentName}` }"
            >{{ route.displayName }}</router-link
          >
        </li>
      </ul>
      <div v-show="isMobile" class="relative">
        <FontAwesomeIcon
          @click="toggleMobileNav"
          icon="bars"
          class="duration-800 absolute top-[0.95rem] right-3 cursor-pointer text-2xl transition-all"
          :class="{ 'rotate-90': mobileNav }"
        ></FontAwesomeIcon>
      </div>
      <transition name="mobile-nav">
        <ul
          v-show="mobileNav && isMobile"
          class="fixed top-2.5 left-0 flex h-full w-full max-w-[240px] flex-col bg-white font-medium"
        >
          <li class="p-4 uppercase" v-for="route in routes" @click="toggleMobileNav">
            <router-link class="no-underline" :to="{ name: `${route.componentName}` }">{{
              route.displayName
            }}</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.5s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>
