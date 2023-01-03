<script setup lang="ts">
defineProps<{
  clickHandler?: (payload: MouseEvent) => any;
}>();
</script>

<template>
  <button
    class="my-2 mx-auto w-fit bg-white p-2 text-base font-thin uppercase text-black hover:opacity-90 focus:outline-none lg:my-4"
    @click="clickHandler"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
