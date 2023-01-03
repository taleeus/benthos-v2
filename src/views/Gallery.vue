<script setup lang="ts">
import Section from "../components/Section.vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import { computedScreen } from "../store/screen.store";
</script>

<template>
  <div>
    <Section title="Photos" class="bg-egg"></Section>
    <Section title="Videos" class="bg-white"></Section>
  </div>
</template>

<style scoped></style>
