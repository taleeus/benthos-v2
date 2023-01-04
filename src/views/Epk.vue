<script setup lang="ts">
import Section from "../components/Section.vue";
import VideosSection from "./sections/VideosSection.vue";
import GallerySection from "./sections/GallerySection.vue";

import { computedScreen } from "../store/screen.store";

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];
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
    <div
      class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-top transition-all duration-500 lg:h-[48rem]"
    >
      <img src="/assets/logos/logo.svg" alt="logo" />
    </div>
    <div
      class="flex flex-row-reverse"
      :class="{ 'flex-col': computedScreen.isMobile.value }"
    >
      <div>
        <Section title="Music" class="h-full bg-black text-white">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/5PPnrtqNsvNpFy0b0UCYbp?utm_source=generator&theme=0"
            :width="computedScreen.isMobile.value ? '100%' : 400"
            :height="computedScreen.isMobile.value ? 400 : 635"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Section>
      </div>
      <Section title="Bio" class="bg-black text-white">
        <div
          class="text-md text-justify"
          :class="{ 'text-xs': computedScreen.isMobile.value }"
        >
          <p>
            A Curious, experimental and pure rock unit based out of Milan, Benthos
            presents a compelling blend of progressive metal, math and jazz rock, a real
            universe of sound which you must hear to believe. The band appears for the
            first as a support act for THE CONTORTIONIST in early 2019, and suddenly the
            band caught the Italian’s scene attention.
          </p>
          <br />
          <p>
            In 2020 the band was forced to work at home due to the Covid-19 but the first
            album took shape and in 2021 Eclipse Records released their debut album titled
            “II” which impressed the metal and progressive community.
          </p>
          <br /><br />
          <p>
            “Benthos set an exclamation point in the international progressive metal scene
            with II. With a flawless sound, innovative ideas and familiar aspects the
            Italians have proven that they can also compete on an international level” -
            MoreCore.De
          </p>
          <br />
          <p>
            “Benthos will have to be measured against this debut album in the future,
            although they certainly are not afraid of it. These are probably such creative
            minds who walk around with a note and a pen in order to be able to write down
            all song ideas immediately” - Time For Metal.De
          </p>
          <br />
          <p>
            “Exploring the outer fringes of musical convention and coming dangerously
            close to redefining the concept of progressive metal, a bold new player
            emerges from the Italian peninsula with a short yet gargantuan stylistic
            excursion of a debut” - Sonic Perspective.
          </p>
          <br /><br />
          <p>
            In 2021 Benthos announced their first tour around Europe called “The Essence
            Tour”.
          </p>
        </div>
      </Section>
    </div>
    <Section title="Singles" class="bg-egg px-0">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
    <Section title="Gallery" class="bg-white">
      <GallerySection :gallery-uris="galleryUris"></GallerySection>
    </Section>
  </div>
</template>

<style scoped></style>
