<script setup lang="ts">
import Section from "../components/Section.vue";
import VideosSection from "../components/sections/VideosSection.vue";
import GallerySection from "../components/sections/GallerySection.vue";

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];

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
    <Section title="Photos" class="bg-white pt-4 lg:pt-6">
      <GallerySection :gallery-uris="galleryUris"></GallerySection>
    </Section>
    <Section title="Singles" class="bg-grain bg-cover px-0 pb-20 pt-12">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
  </div>
</template>

<style scoped></style>
