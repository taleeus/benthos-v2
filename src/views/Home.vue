<script setup lang="ts">
import Section from "../components/Section.vue";
import MusicBox from "../components/MusicBox.vue";
import VideosSection from "../components/sections/VideosSection.vue";
import { useScreenStore } from "../stores/useScreen";
import { storeToRefs } from "pinia";

const { isMobile } = storeToRefs(useScreenStore());

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];
</script>

<template>
  <div>
    <div
      class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-top lg:h-[48rem]"
    ></div>
    <Section
      title="Dissonance Festival 2023"
      class="flex flex-col items-center justify-center bg-dissonance bg-cover bg-center text-white"
    >
      <a
        class="flex justify-center drop-shadow-lg lg:w-4/5"
        href="https://linktr.ee/dissonancefestival"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          v-show="!isMobile"
          src="/assets/backgrounds/dissonance-flyer-desktop.avif"
          alt="Dissonance Festival 2023 Flyer"
        />
        <img
          v-show="isMobile"
          src="/assets/backgrounds/dissonance-flyer-mobile.avif"
          alt="Dissonance Festival 2023 Flyer"
        />
      </a>
      <div class="mt-6 flex gap-10 lg:mt-14">
        <a
          href="https://linktr.ee/dissonancefestival"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-white py-4 px-10 font-medium uppercase text-black hover:bg-lightGrey"
          >Tickets</a
        >
      </div></Section
    >

    <Section title="Music" class="bg-black pb-16 text-white">
      <div class="justify-around md:flex lg:flex-row">
        <MusicBox
          cover-art-url="/assets/coverArts/cover-art.avif"
          title="II"
          stream-url="https://ffm.to/bnthii"
        ></MusicBox
        ><MusicBox
          cover-art-url="/assets/coverArts/debris-essence-bside.avif"
          title="Debris // Essence B-Side"
          stream-url="https://ffm.to/dbrs"
        ></MusicBox>
      </div>
    </Section>
    <Section
      title="Tour Dates"
      class="flex-col bg-tour bg-cover bg-center text-white lg:bg-center"
    >
      There are no tours announced at the moment.
      <div class="my-10">
        <a
          href="https://www.bandsintown.com/a/1419641-benthos?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-white py-4 px-6 font-medium uppercase text-black hover:bg-lightGrey"
          >Track our shows</a
        >
      </div>
    </Section>
    <Section title="Singles" class="bg-grain bg-cover px-0 pb-20 pt-12">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
  </div>
</template>

<style scoped></style>
