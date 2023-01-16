<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useScreenStore } from "../../stores/useScreen";
defineProps<{
  videoIds: string[];
}>();

const { isMobile } = storeToRefs(useScreenStore());
</script>

<template>
  <Carousel wrap-around>
    <Slide v-for="videoId in videoIds" :key="videoId" class="w-full">
      <iframe
        :width="isMobile ? 248 : 800"
        :height="isMobile ? 140 : 450"
        :src="`https://www.youtube.com/embed/${videoId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        controls="0"
        loading="lazy"
      ></iframe>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped></style>
