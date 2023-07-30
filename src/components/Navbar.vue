<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useScreenStore } from "../stores/useScreen";
import { RouteInfo } from "../types/routes.types";

defineProps<{
  routes: RouteInfo[];
}>();

const { isMobile } = storeToRefs(useScreenStore());

const mobileNav = ref(false);
const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

const route = useRoute();
const scrollY = ref(0)
const logoScrollHandler = (_event: Event) => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', logoScrollHandler);
})
onUnmounted(() => {
  window.removeEventListener('scroll', logoScrollHandler);
})
</script>

<template>
  <header class="fixed z-50 h-16 w-full bg-white transition-all duration-500 bg-opacity-50 backdrop-blur">
    <nav class="my-auto flex justify-between px-4 py-1.5 text-black transition-all duration-500 lg:px-16 lg:py-1">
      <router-link class="w-[180px]" :to="{ name: 'Home' }">
        <transition name="fade" mode="out-in">
          <img src="/assets/logos/logo.svg" v-show="route.name != 'Home' || isMobile || scrollY > 230" alt="logo" />
        </transition>
      </router-link>
      <ul v-show="!isMobile" class="flex">
        <li v-for="route in routes" class="mx-6 p-4 uppercase">
          <router-link class="font-medium no-underline hover:text-darkBrown" :to="{ name: `${route.componentName}` }">{{
            route.displayName }}</router-link>
        </li>
      </ul>
      <div v-show="isMobile" class="relative">
        <FontAwesomeIcon @click="toggleMobileNav" icon="bars"
          class="duration-800 absolute top-[0.95rem] right-3 cursor-pointer text-2xl transition-all"
          :class="{ 'rotate-90': mobileNav }"></FontAwesomeIcon>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav && isMobile"
          class="fixed top-16 left-0 flex h-screen w-full max-w-[240px] flex-col bg-white bg-opacity-50 backdrop-blur">
          <li class="p-4 pl-8 uppercase" v-for="route in routes" @click="toggleMobileNav">
            <router-link class="no-underline font-medium" :to="{ name: `${route.componentName}` }">{{ route.displayName
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
