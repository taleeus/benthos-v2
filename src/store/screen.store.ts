import { reactive, computed } from 'vue';

export const screen = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
});

window.addEventListener('resize', () => {
  screen.width = window.innerWidth;
  screen.height = window.innerHeight;
});

export const computedScreen = {
  isMobile: computed(() => screen.width < 750),
};
