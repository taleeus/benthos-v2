<script setup lang="ts">
import Section from "../components/Section.vue";
import MusicBox from "../components/MusicBox.vue";
import VideosSection from "../components/sections/VideosSection.vue";

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];
</script>

<template>
  <div>
    <div
      class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-top lg:h-[48rem]"
    ></div>
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
      class="flex-col bg-black bg-tour bg-cover bg-center pb-14 pt-14 text-white lg:bg-center"
    >
      There are no tours announced at the moment.
      <div class="my-10">
        <a
          href="https://www.songkick.com/artists/5048318-benthos"
          target="_blank"
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
