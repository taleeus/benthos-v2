<script setup lang="ts">
import Section from "../components/Section.vue";
import GallerySection from "../components/sections/GallerySection.vue";
import VideosSection from "../components/sections/VideosSection.vue";

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];

const galleryUris = [
  "/assets/gallery/medium/all-slaughter.medium.avif",
  "/assets/gallery/medium/bside-building.medium.avif",
  "/assets/gallery/medium/gl-slaughter.medium.avif",
  "/assets/gallery/medium/pap-slaughter.medium.avif",
  "/assets/gallery/medium/ale-slaughter.medium.avif",
  "/assets/gallery/medium/heads.medium.avif",
  "/assets/gallery/medium/alby-slaughter.medium.avif",
  "/assets/gallery/medium/all-modena.medium.avif",
  "/assets/gallery/medium/heads-debris.medium.avif",
  "/assets/gallery/medium/trip-slaughter.medium.avif",
];

const galleryPlaceholders = [
  "/assets/gallery/small/all-slaughter.small.avif",
  "/assets/gallery/small/bside-building.small.avif",
  "/assets/gallery/small/gl-slaughter.small.avif",
  "/assets/gallery/small/pap-slaughter.small.avif",
  "/assets/gallery/small/ale-slaughter.small.avif",
  "/assets/gallery/small/heads.small.avif",
  "/assets/gallery/small/alby-slaughter.small.avif",
  "/assets/gallery/small/all-modena.small.avif",
  "/assets/gallery/small/heads-debris.small.avif",
  "/assets/gallery/small/trip-slaughter.small.avif",
];
</script>

<template>
  <div>
    <Section title="Photos" class="bg-white pt-4 lg:pt-6">
      <GallerySection
        :gallery-uris="galleryUris"
        :gallery-placeholders="galleryPlaceholders"
      ></GallerySection>
    </Section>
    <Section
      title="Singles"
      class="bg-debris bg-cover px-0 pb-20 pt-12 text-white"
    >
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
    <Section
      title="Talk to Me, Dragonfly!"
      class="bg-dragonfly bg-cover bg-center pb-10 text-white"
    >
      <div class="pb-4 text-xl uppercase tracking-widest text-white">
        Live at Dissonance Festival
      </div>
      <div class="flex justify-center align-middle">
        <iframe
          :width="isMobile ? 480 : isTablet ? 600 : 800"
          :height="isMobile ? 220 : 450"
          src="https://www.youtube.com/embed/ue1BDz156Z4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          rel="0"
          loading="lazy"
        ></iframe>
      </div>
    </Section>

  </div>
</template>

<style scoped></style>
