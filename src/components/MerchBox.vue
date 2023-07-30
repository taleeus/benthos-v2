<script setup lang="ts">
import LazyImage from "./LazyImage.vue";

defineProps<{
  title: string;
  imageUrl: string;
  placeholderUrl: string;
  price: string;
  articleUrl: string;
}>();
</script>

<template>
  <a :href="articleUrl" target="_blank" rel="noopener noreferrer"
    class="rounded-md transition-all duration-400 hover:scale-105 hover:opacity-95">
    <div class="p-6 text-xl uppercase lg:p-8 lg:text-2xl">
      <div class="flex h-[12rem] w-[12rem] items-center justify-center mx-auto lg:h-[20rem] lg:w-[20rem]">
        <lazy-image :src="imageUrl" :placeholder="placeholderUrl" class="drop-shadow-xl" />
      </div>
      <div class="mt-4">{{ title }}</div>
      <div class="text-sm lg:text-base">
        {{ price }}
      </div>
    </div>
  </a>
</template>

<style scoped></style>
