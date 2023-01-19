<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="w-full p-8 pt-0 text-center text-lg lg:py-24 lg:px-20">
    <h1
      v-show="title"
      class="p-6 text-3xl uppercase tracking-widest lg:p-10 lg:text-4xl"
    >
      {{ title }}
    </h1>
    <slot></slot>
  </div>
</template>

<style scoped></style>
