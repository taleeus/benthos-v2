<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, onUnmounted, ref } from "vue";
import { useScreenStore } from "../stores/useScreen";

const { isMobile } = storeToRefs(useScreenStore());
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
  <header class="fixed z-50 h-16 w-full bg-white bg-opacity-50 backdrop-blur transition-all duration-500">
    <nav class="my-auto flex justify-between px-4 py-1.5 text-black transition-all duration-500 lg:px-16 lg:py-1">
      <div class="w-[180px]">
        <transition name="fade" mode="out-in">
          <img src="/assets/logos/logo.svg" v-show="isMobile || scrollY > 230" alt="logo" />
        </transition>
      </div>
      <ul class="flex">
        <li class="m-auto px-5 uppercase lg:mx-6 lg:p-4">
          <a href="mailto:benthos.milano@gmail.com" class="font-medium no-underline hover:text-brown">
            <div class="flex flex-row">
              <FontAwesomeIcon icon="envelope" class="m-auto text-2xl md:mx-2 lg:mx-2 lg:text-base"></FontAwesomeIcon>
              <div v-show="!isMobile">Contact Us</div>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
