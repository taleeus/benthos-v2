<script setup lang="ts">
import Section from "../components/Section.vue";
import MusicBox from "../components/MusicBox.vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import { computedScreen } from "../store/screen.store";

const videoIDs = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc"];
</script>

<template>
  <div>
    <div
      class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-right-bottom transition-all duration-500 lg:h-screen"
    ></div>
    <Section title="Music" class="bg-black text-white">
      <div class="flex flex-col justify-around lg:flex-row">
        <MusicBox
          cover-art-url="/assets/coverArts/cover-art.jpg"
          title="II"
          stream-url="https://ffm.to/bnthii"
        ></MusicBox
        ><MusicBox
          cover-art-url="/assets/coverArts/debris-essence-bside.jpg"
          title="Debris // Essence B-Side"
          stream-url="https://ffm.to/dbrs"
        ></MusicBox>
      </div>
    </Section>
    <Section title="Tour Dates" class="bg-egg">
      There are no tours announced at the moment.
    </Section>
    <Section title="Singles" class="bg-white px-0">
      <Carousel :wrap-around="true">
        <Slide v-for="videoID in videoIDs" :key="videoID" class="w-full">
          <iframe
            :width="computedScreen.isMobile.value ? 248 : 560"
            :height="computedScreen.isMobile.value ? 140 : 315"
            :src="`https://www.youtube.com/embed/${videoID}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </Section>
  </div>
</template>

<style scoped></style>
