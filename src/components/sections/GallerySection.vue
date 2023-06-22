<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useScreenStore } from "../../stores/useScreen";
import LazyImage from "../LazyImage.vue";

const { isMobile } = storeToRefs(useScreenStore());

defineProps<{
  galleryUris: string[];
  galleryPlaceholders: string[];
}>();

const currentImage = ref(0);
const slideTo = (val: number) => (currentImage.value = val);
</script>

<template>
  <div class="rounded-md bg-cover" :style="{ 'background-image': `url(${galleryUris[currentImage]})` }">
    <div class="rounded-md p-4 backdrop-blur backdrop-brightness-75 lg:p-8">
      <Carousel id="gallery" wrap-around items-to-show="1" v-model="currentImage" class="my-6">
        <Slide v-for="(image, index) of galleryUris" :key="index">
          <div
            class="flex h-[9rem] w-[16rem] items-center justify-center md:h-[18rem] md:w-[32rem] lg:h-[27rem] lg:w-[48rem]">
            <img :src="image" class="min-h-full" />
          </div>
        </Slide>
      </Carousel>
      <Carousel id="thumbnails" wrap-around :items-to-show="isMobile ? 3 : 4" v-model="currentImage" ref="carousel">
        <Slide v-for="(image, index) of galleryUris" :key="index">
          <div class="flex h-[2.7rem] w-[4.8rem] cursor-pointer items-center justify-center lg:h-[9rem] lg:w-[16rem]"
            @click="slideTo(galleryUris.indexOf(image))">
            <lazy-image :src="image" :placeholder="galleryPlaceholders[index]" class="min-h-full" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style scoped></style>
