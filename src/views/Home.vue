<script setup lang="ts">
import Section from "../components/Section.vue";
import MusicBox from "../components/MusicBox.vue";
import VideosSection from "../components/sections/VideosSection.vue";

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];
</script>

<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/vue2-animate/dist/vue2-animate.min.css"
  />

  <div>
    <div
      class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-top lg:h-[48rem]"
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
    <Section title="Tour Dates" class="flex-col bg-white">
      There are no tours announced at the moment.
      <div class="my-10">
        <a
          href="https://www.songkick.com/artists/5048318-benthos"
          target="_blank"
          class="tour-button"
          >Track our shows</a
        >
      </div>
    </Section>
    <Section title="Singles" class="grain-bg px-0">
      <VideosSection :video-ids="videoIds"></VideosSection>
    </Section>
  </div>
</template>

<style scoped>
.bg-debris-bside-gradient {
  background-image: linear-gradient(
      to bottom,
      rgba(240, 239, 235, 0.3),
      rgb(21, 21, 21)
    ),
    url(/assets/backgrounds/debris-bside.avif);
}
.bg-black {
  background-color: rgb(21 21 21);
}

.tour-button {
  background-color: rgb(190, 190, 190);
  padding: 1rem 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 0.5rem;
}

.tour-button:hover {
  background-color: #e5cb98;
}
.grain-bg {
  background-image: url("../../public/assets/backgrounds/grain-bg.png");
}
</style>
