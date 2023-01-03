<script setup lang="ts">
defineProps<{
  title: string;
  imageUrl: string;
  price: string;
  articleUrl: string;
}>();
</script>

<template>
  <a :href="articleUrl" target="_blank" rel="noopener noreferrer">
    <div class="p-4 text-sm uppercase text-black hover:opacity-70 lg:text-2xl">
      <div
        class="flex h-[6rem] w-[6rem] items-center justify-center lg:h-[20rem] lg:w-[20rem]"
      >
        <img :src="imageUrl" />
      </div>
      {{ title }}
      <div class="text-xs lg:text-base">
        {{ price }}
      </div>
    </div>
  </a>
</template>

<style scoped></style>
