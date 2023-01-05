<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navbar
      v-show="!$route.meta.epk"
      :routes="[
        { componentName: 'Home', displayName: 'Home' },
        { componentName: 'Gallery', displayName: 'Gallery' },
        { componentName: 'Merch', displayName: 'Merch' },
      ]"
    ></Navbar>
    <div v-show="!$route.meta.epk" class="h-16 w-full"></div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer v-show="!$route.meta.login"></Footer>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
