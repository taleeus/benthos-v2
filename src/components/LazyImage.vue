<script setup lang="ts">
defineProps<{
  src: string;
  placeholder: string;
  alt?: string;
}>();
</script>

<template>
  <v-lazy-image
    :src="src"
    :src-placeholder="placeholder"
    :alt="alt"
  ></v-lazy-image>
</template>

<style scoped>
.v-lazy-image {
  filter: blur(5px);
  transition: filter 0.5s;
  will-change: filter;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
