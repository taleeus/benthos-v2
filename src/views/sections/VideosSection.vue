<script setup lang="ts">
import { computedScreen } from "../../store/screen.store";
defineProps<{
  videoIds: string[];
}>();
</script>

<template>
  <Carousel wrap-around :autoplay="5000">
    <Slide v-for="videoId in videoIds" :key="videoId" class="w-full">
      <iframe
        :width="computedScreen.isMobile.value ? 248 : 1120"
        :height="computedScreen.isMobile.value ? 140 : 630"
        :src="`https://www.youtube.com/embed/${videoId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped></style>
