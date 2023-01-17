<script setup lang="ts">
import Section from "../components/Section.vue";
import VideosSection from "../components/sections/VideosSection.vue";
import GallerySection from "../components/sections/GallerySection.vue";

const videoIds = ["1fHlNrLm0-c", "QnrbSXxpkDM", "BLEeyhLwgIU", "Wu4u3d_QbOw"];
const galleryUris = [
  "/assets/gallery/all-slaughter.avif",
  "/assets/gallery/bside-building.avif",
  "/assets/gallery/gl-slaughter.avif",
  "/assets/gallery/pap-slaughter.avif",
  "/assets/gallery/ale-slaughter.avif",
  "/assets/gallery/heads.avif",
  "/assets/gallery/alby-slaughter.avif",
  "/assets/gallery/all-modena.avif",
  "/assets/gallery/heads-debris.avif",
  "/assets/gallery/trip-slaughter.avif",
];
</script>

<template>
  <div>
    <Section title="Photos" class="bg-white">
      <GallerySection :gallery-uris="galleryUris"></GallerySection>
    </Section>
    <Section title="Videos" class="bg-grain x-0 bg-white">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
  </div>
</template>

<style scoped></style>
