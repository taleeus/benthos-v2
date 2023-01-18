<script setup lang="ts">
import Button from "./Button.vue";

const props = defineProps<{
  coverArtUrl: string;
  coverArtAlt?: string;
  title: string;
  streamUrl: string;
}>();

const openStream = () => {
  window.open(props.streamUrl, "_blank");
};
</script>

<template>
  <div
    class="flex w-full items-center justify-between gap-10 drop-shadow-md lg:gap-0"
  >
    <a :href="$props.streamUrl" target="_blank" rel="noopener noreferrer">
      <img
        :src="coverArtUrl"
        :alt="coverArtAlt"
        class="m-4 h-auto w-32 rounded-md transition-all duration-500 hover:scale-110 lg:w-80"
      />
    </a>
    <div
      class="flex w-full flex-col text-center text-base uppercase lg:text-2xl"
    >
      {{ title }}
      <Button :click-handler="openStream">Listen Now</Button>
    </div>
  </div>
</template>

<style scoped></style>
