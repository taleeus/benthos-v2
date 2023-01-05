<script setup lang="ts">
import Section from "../components/Section.vue";
import VideosSection from "../components/sections/VideosSection.vue";
import GallerySection from "../components/sections/GallerySection.vue";

const videoIds = ["BLEeyhLwgIU", "1fHlNrLm0-c", "Wu4u3d_QbOw", "QnrbSXxpkDM"];
const galleryUris = [
  "/assets/gallery/all-slaughter-min.jpg",
  "/assets/gallery/bside-building-min.jpg",
  "/assets/gallery/gl-slaughter-min.jpg",
  "/assets/gallery/pap-slaughter-min.jpg",
  "/assets/gallery/ale-slaughter-min.jpg",
  "/assets/gallery/heads-min.jpg",
  "/assets/gallery/alby-slaughter-min.jpg",
  "/assets/gallery/modena-all-min.jpg",
  "/assets/gallery/heads-debris-min.jpg",
  "/assets/gallery/trip-modena-min.jpg",
];
</script>

<template>
  <div>
    <Section title="Videos" class="bg-egg px-0">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
    <Section title="Photos" class="bg-white">
      <GallerySection :gallery-uris="galleryUris"></GallerySection>
    </Section>
  </div>
</template>

<style scoped></style>
