<script setup lang="ts">
import moment from "moment";
import { storeToRefs } from "pinia";
import MusicBox from "../components/MusicBox.vue";
import Section from "../components/Section.vue";
import VideosSection from "../components/sections/VideosSection.vue";
import { useBandsintownStore } from "../stores/useBandsintown";
import { useScreenStore } from "../stores/useScreen";

const { isMobile } = storeToRefs(useScreenStore());

const { fetchEvents } = useBandsintownStore();
const { events } = storeToRefs(useBandsintownStore());
fetchEvents();

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];
</script>

<template>
  <div>
    <div class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-top lg:h-[48rem]"></div>
    <Section title="Dissonance Festival 2023"
      class="flex flex-col items-center justify-center bg-dissonance bg-cover bg-center text-white">
      <a class="flex justify-center drop-shadow-lg transition-all duration-500 hover:scale-105 lg:w-4/5"
        href="https://linktr.ee/dissonancefestival" target="_blank" rel="noopener noreferrer">
        <img v-show="!isMobile" class="rounded-md" src="/assets/backgrounds/dissonance-flyer-desktop.avif"
          alt="Dissonance Festival 2023 Flyer" />
        <img v-show="isMobile" class="rounded-md" src="/assets/backgrounds/dissonance-flyer-mobile.avif"
          alt="Dissonance Festival 2023 Flyer" />
      </a>
      <div class="mt-6 flex gap-10 lg:mt-14">
        <a href="https://linktr.ee/dissonancefestival" target="_blank" rel="noopener noreferrer"
          class="rounded-lg bg-white py-4 px-10 font-medium uppercase text-black hover:bg-lightGrey">Buy Tickets</a>
      </div>
    </Section>

    <Section title="Music" class="bg-ii bg-cover bg-center pb-16 text-white backdrop-brightness-50">
      <div class="justify-around md:flex lg:flex-row">
        <MusicBox cover-art-url="/assets/coverArts/cover-art.avif" release-type="Album" title="II"
          stream-url="https://ffm.to/bnthii"></MusicBox>
        <MusicBox cover-art-url="/assets/coverArts/debris-essence-bside.avif" release-type="Single"
          title="Debris // Essence B-Side" stream-url="https://ffm.to/dbrs"></MusicBox>
      </div>
    </Section>
    <Section title="Tour Dates"
      class="flex-col justify-center bg-tour bg-cover bg-center text-white md:px-4 lg:bg-center">
      <table class="w-full table-fixed rounded-md bg-black bg-opacity-70 backdrop-blur-sm md:table-fixed lg:table-auto">
        <tbody>
          <tr v-for="event of events" :key="event.name"
            class="flex-no-wrap flex border-collapse flex-col border-b border-white/50 last:border-b-0 sm:table-row">
            <td class="pt-6 font-semibold md:py-6 md:px-4 lg:p-6">
              {{ event.name }}
            </td>
            <td class="pt-4 md:w-1/5 md:py-6 lg:p-6">
              {{ moment(event.date).format("MMM Do YY") }}
            </td>
            <td class="md:py-6 lg:py-6">
              {{ `${event.location}` }}
            </td>
            <td class="pt-6 pb-8 md:py-6 lg:p-6 lg:w-1/4">
              <a :href="event.ticketsUrl" :hidden="!event.ticketsUrl" target="_blank" rel="noopener noreferrer"
                class="rounded-lg border py-2 px-4 font-medium text-white transition-all duration-400 hover:border-cream hover:text-cream">
                <FontAwesomeIcon icon="fa-ticket" class="mr-2"></FontAwesomeIcon>
                Buy tickets
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="my-10">
        <a href="https://www.bandsintown.com/a/1419641-benthos?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar"
          target="_blank" rel="noopener noreferrer"
          class="rounded-lg bg-white py-4 px-6 font-medium uppercase text-black hover:bg-lightGrey">Track our shows</a>
      </div>
    </Section>
    <Section title="Merch"
      class="relative flex flex-col items-center justify-center bg-grain bg-cover bg-center px-0 pb-0 lg:px-20 lg:pt-4 lg:pb-0">
      <img src="/assets/backgrounds/merch-bg.avif" class="pt-20 drop-shadow-xl md:pt-0 lg:pt-0" />

      <a href="https://benthos-music.com/merch" target="_blank" rel="noopener noreferrer"
        class="absolute top-28 rounded-lg bg-red bg-cover py-4 px-6 font-medium uppercase text-white drop-shadow-md hover:bg-white hover:text-black md:top-48 md:py-6 md:px-12 md:text-xl lg:top-72 lg:py-6 lg:px-12 lg:text-xl">Shop
        now</a>
    </Section>
    <Section title="Singles" class="bg-debris bg-cover px-0 pb-20 pt-12 text-white">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
  </div>
</template>

<style scoped></style>
