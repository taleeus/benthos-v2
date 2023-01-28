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
  "/assets/gallery/all-modena.avif",
  "/assets/gallery/heads-debris.avif",
  "/assets/gallery/trip-slaughter.avif",
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
      <Section title="Bio" class="bg-black text-egg">
        <div class="text-justify text-xs lg:text-base">
          <p>
            A curious, experimental, pure rock unit based out of Milan, Benthos present a
            compelling blend of progressive metal, math, and jazz-rock — a real universe
            of sound which you must hear to believe.
          </p>
          <br />
          <p>
            The band performed live on stage for the first time as a support act for
            <strong>The Contortionist</strong> in early 2019, and suddenly caught the
            Italian’s scene attention.
          </p>
          <br />
          <p>
            In 2020 Benthos were forced to work at home due to Covid-19, but despite the
            restrictive circumstances, the first album took shape. In 2021, American label
            <a
              href="https://www.eclipserecords.com/"
              target="_blank"
              class="not-italic transition-all duration-400 hover:text-cream"
              >Eclipse Records</a
            >
            released the band's debut album titled “II”, which impressed the metal and
            progressive community worldwide.
          </p>
          <br />
          <p>
            In 2022, Benthos toured around Europe for the “The Essence Tour”, playing in
            venues across Italy, Germany, and Hungary.
          </p>
          <br />
          <div class="reviews">
            <p class="border-l-2 border-solid border-cream pl-6 italic">
              “Benthos will have to be measured against this debut album in the future,
              although they certainly are not afraid of it. These are probably such
              creative minds who walk around with a note and a pen in order to be able to
              write down all song ideas immediately”—
              <a
                href="https://time-for-metal.eu/benthos-ii/"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >Time For Metal</a
              ><span class="not-italic tracking-widest">, 9.5/10</span>
            </p>
            <br />
            <p class="border-l-2 border-solid border-cream pl-6 italic">
              "I’ve found myself drawn back again and again to these tracks and am sure
              many of you will feel the same after you give it a go"—
              <a
                href="https://metaltrenches.com/reviews/benthos-ii-album-review-3079"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >Metal Trenches</a
              ><span class="not-italic tracking-widest">, 8.7/10</span>
            </p>
            <br />

            <p class="border-l-2 border-solid border-cream pl-6 italic">
              “Benthos set an exclamation point in the international progressive metal
              scene with II. With a flawless sound, innovative ideas and familiar aspects
              the Italians have proven that they can also compete on an international
              level” —
              <a
                href="https://www.morecore.de/review/benthos/ii/"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >MoreCore.De</a
              ><span class="not-italic tracking-widest">, 8/10</span>
            </p>
            <br />
            <p class="border-l-2 border-solid border-cream pl-6 italic">
              “Exploring the outer fringes of musical convention and coming dangerously
              close to redefining the concept of progressive metal, a bold new player
              emerges from the Italian peninsula with a short yet gargantuan stylistic
              excursion of a debut” —
              <a
                href="https://www.sonicperspectives.com/album-reviews/benthos-ii/"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >Sonic Perspective</a
              ><span class="not-italic tracking-widest">, 8.4/10</span>
            </p>
          </div>
          <br /><br />
        </div>
      </Section>
      <div>
        <Section title="Music" class="h-full bg-black text-white">
          <iframe
            style="border-radius: 12px; display: unset"
            src="https://open.spotify.com/embed/playlist/5PPnrtqNsvNpFy0b0UCYbp?utm_source=generator&theme=0"
            :width="isMobile ? '100%' : 400"
            :height="isMobile ? 400 : 635"
            frameBorder="0"
            allow="autoplay; clipboappears for the first asard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Section>
      </div>
    </div>
    <Section title="Singles" class="bg-debris bg-cover px-0 text-white">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
    <Section title="Gallery" class="bg-white">
      <GallerySection :gallery-uris="galleryUris"></GallerySection>
    </Section>
  </div>
</template>

<style scoped></style>
