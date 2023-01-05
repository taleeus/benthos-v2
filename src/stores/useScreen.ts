import { reactive, computed } from 'vue';
import { defineStore } from 'pinia'

const screen = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
});

window.addEventListener('resize', () => {
  screen.width = window.innerWidth;
  screen.height = window.innerHeight;
});

export const useScreenStore = defineStore('screen', () => {
  const screen = reactive({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  window.addEventListener('resize', () => {
    screen.width = window.innerWidth;
    screen.height = window.innerHeight;
  });

  const isMobile = computed(() => screen.width < 750);

  return { screen, isMobile };
});
