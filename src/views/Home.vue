<script setup lang="ts">
import Section from "../components/Section.vue";
import MusicBox from "../components/MusicBox.vue";
import VideosSection from "../components/sections/VideosSection.vue";

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];
</script>

<template>
  <div>
    <div
      class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-top transition-all duration-500 lg:h-[48rem]"
    ></div>
    <Section title="Music" class="bg-black text-white">
      <div class="flex flex-col justify-around lg:flex-row">
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
    <Section title="Tour Dates" class="bg-egg">
      There are no tours announced at the moment.
    </Section>
    <Section title="Singles" class="px-0">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
  </div>
</template>

<style scoped></style>
