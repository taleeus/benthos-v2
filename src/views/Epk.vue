<script setup lang="ts">
import EpkBanner from "../components/EpkBanner.vue";
import Section from "../components/Section.vue";
import VideosSection from "../components/sections/VideosSection.vue";
import GallerySection from "../components/sections/GallerySection.vue";

import { useScreenStore } from "../stores/useScreen";
import { storeToRefs } from "pinia";

const { isMobile } = storeToRefs(useScreenStore());

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];
const galleryUris = [
  "/assets/gallery/all-slaughter.avif",
  "/assets/gallery/bside-building.avif",
  "/assets/gallery/gl-slaughter.avif",
  "/assets/gallery/pap-slaughter.avif",
  "/assets/gallery/ale-slaughter.avif",
  "/assets/gallery/heads.avif",
  "/assets/gallery/alby-slaughter.avif",
  "/assets/gallery/modena-all.avif",
  "/assets/gallery/heads-debris.avif",
  "/assets/gallery/trip-modena.avif",
];
</script>

<template>
  <div>
    <EpkBanner></EpkBanner>
    <div class="h-16 w-full"></div>
    <div
      class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-top px-8 transition-all duration-500 lg:h-[48rem] lg:px-32"
    ></div>
    <div class="flex flex-col lg:flex-row">
      <Section title="Bio" class="bg-black text-white">
        <div class="text-justify text-xs lg:text-base">
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
          <p class="italic">
            “Benthos set an exclamation point in the international progressive metal scene
            with II. With a flawless sound, innovative ideas and familiar aspects the
            Italians have proven that they can also compete on an international level” -
            MoreCore.De
          </p>
          <br />
          <p class="italic">
            “Benthos will have to be measured against this debut album in the future,
            although they certainly are not afraid of it. These are probably such creative
            minds who walk around with a note and a pen in order to be able to write down
            all song ideas immediately” - Time For Metal.De
          </p>
          <br />
          <p class="italic">
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
      <div>
        <Section title="Music" class="h-full bg-black text-white">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/5PPnrtqNsvNpFy0b0UCYbp?utm_source=generator&theme=0"
            :width="isMobile ? '100%' : 400"
            :height="isMobile ? 400 : 635"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Section>
      </div>
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
