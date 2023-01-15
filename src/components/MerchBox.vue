<script setup lang="ts">
defineProps<{
  title: string;
  imageUrl: string;
  price: string;
  articleUrl: string;
}>();
</script>

<template>
  <a
    :href="articleUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="rounded-md"
  >
    <div class="p-2 text-sm uppercase lg:p-8 lg:text-2xl">
      <div
        class="flex h-[6rem] w-[6rem] items-center justify-center lg:h-[20rem] lg:w-[20rem]"
      >
        <img
          :src="imageUrl"
          class="mt-5 mb-10 transition hover:scale-105 hover:opacity-95"
        />
      </div>
      {{ title }}
      <div class="text-xs lg:text-base">
        {{ price }}
      </div>
    </div>
  </a>
</template>

<style scoped>
.transition {
  transition: all 0.3s ease-in-out;
}
</style>
