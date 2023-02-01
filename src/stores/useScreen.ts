import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useScreenStore = defineStore("screen", () => {
  const screen = reactive({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  window.addEventListener("resize", () => {
    screen.width = window.innerWidth;
    screen.height = window.innerHeight;
  });

  const isMobile = computed(() => screen.width <= 699);

  const isTablet = computed(() => screen.width >= 700 && screen.width < 1024);

  return { screen, isMobile, isTablet };
});
