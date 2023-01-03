<script setup lang="ts">
import Section from "../components/Section.vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import { computedScreen } from "../store/screen.store";
import { ref } from "vue";

const videoIDs = ["BLEeyhLwgIU", "1fHlNrLm0-c", "Wu4u3d_QbOw", "QnrbSXxpkDM"];
const galleryURIs = [
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

const currentImage = ref(0);
const slideTo = (val: number) => (currentImage.value = val);
</script>

<template>
  <div>
    <Section title="Photos" class="bg-egg">
      <Carousel
        id="gallery"
        wrap-around
        :items-to-show="1"
        v-model="currentImage"
        class="my-6"
      >
        <Slide v-for="image of galleryURIs" :key="image">
          <div
            class="flex h-[9rem] w-[16rem] items-center justify-center lg:h-[18rem] lg:w-[32rem]"
          >
            <img :src="image" class="min-h-full" />
          </div>
        </Slide>
      </Carousel>
      <Carousel
        id="thumbnails"
        wrap-around
        :items-to-show="computedScreen.isMobile.value ? 3.5 : 4.5"
        v-model="currentImage"
        ref="carousel"
        class="lg:mx-32"
      >
        <Slide v-for="image of galleryURIs" :key="image">
          <div
            class="flex h-[2.7rem] w-[4.8rem] items-center justify-center lg:h-[9rem] lg:w-[16rem]"
            @click="slideTo(galleryURIs.indexOf(image))"
          >
            <img :src="image" class="min-h-full" />
          </div>
        </Slide>
      </Carousel>
    </Section>
    <Section title="Videos" class="bg-white px-0">
      <Carousel wrap-around :autoplay="5000">
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
