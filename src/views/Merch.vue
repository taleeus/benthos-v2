<script setup lang="ts">
import { storeToRefs } from "pinia";
import MerchBox from "../components/MerchBox.vue";
import Section from "../components/Section.vue";
import { useBigcartelStore } from "../stores/useBigcartel";
import { Merch } from "../types/merch.types";
import { not } from "../utilities/predicates";

const { merch } = storeToRefs(useBigcartelStore());

const musicTypes = ["digipak", "album", "cd", "vinyl"];
const musicPredicate = (m: Merch) => musicTypes
  .map((word) => m.name.toLowerCase().includes(word))
  .reduce((a, b) => a || b, false);
</script>

<template>
  <div>
    <Section
      title="Merch"
      class="bg-white bg-grain bg-cover bg-center lg:pt-6 lg:pb-16"
    >
      <div class="flex flex-row flex-wrap justify-around">
        <MerchBox
          class="m-4 bg-[#FFF] text-black"
          v-for="article in merch.filter(not(musicPredicate))"
          :key="article.name"
          :title="article.name"
          :price="article.price"
          :image-url="article.imageUrl"
          :placeholder-url="article.imageUrl.replaceAll('1000', '200')"
          :article-url="article.url"
        ></MerchBox>
      </div>
    </Section>

    <Section title="Music" class="bg-ii bg-cover bg-center text-white lg:py-8">
      <div class="flex flex-row flex-wrap justify-around">
        <MerchBox
          class="m-4 bg-[#FFF] text-black"
          v-for="article in merch.filter(musicPredicate)"
          :key="article.name"
          :title="article.name"
          :price="article.price"
          :image-url="article.imageUrl"
          :placeholder-url="article.imageUrl.replaceAll('1000', '200')"
          :article-url="article.url"
        ></MerchBox>
      </div>
    </Section>
  </div>
</template>

<style scoped></style>
