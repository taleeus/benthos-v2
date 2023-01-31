<script setup lang="ts">
import Section from "../components/Section.vue";
import MerchBox from "../components/MerchBox.vue";

const bigCartelArticles = [
  {
    title: "II - Digipak",
    price: "€ 12.00",
    imageUrl:
      "https://assets.bigcartel.com/product_images/350794669/merch+IG+CD+copia.jpg?auto=format&fit=max&w=800",
    url: "https://benthosmerch.bigcartel.com/product/ii-digipak",
  },
];
const teespringArticles = [
  {
    title: "II T-Shirt",
    price: "€ 13.98",
    imageUrl:
      "https://vangogh.teespring.com/v3/image/kZeFCDJRZNk7kuvXka8_G_ZTvMw/480/560.jpg",
    url: "https://teespring.com/ii-t-shirt?tsmac=store&tsmic=benthos",
  },
  {
    title: "T-Shirt",
    price: "€ 13.98",
    imageUrl:
      "https://vangogh.teespring.com/v3/image/mGMctYRpLHsAMu5P09btCVOj8p8/480/560.jpg",
    url: "https://teespring.com/debris-t-shirt?tsmac=store&tsmic=benthos",
  },
  {
    title: "Long Sleeve",
    price: "€ 19.98",
    imageUrl:
      "https://vangogh.teespring.com/v3/image/473fIJpli2OZNKd09H3ufjmxi9s/480/560.jpg",
    url: "https://teespring.com/debris-LongSleeve?tsmac=store&tsmic=benthos",
  },
  {
    title: "Hoodie",
    price: "€ 39.76",
    imageUrl:
      "https://vangogh.teespring.com/v3/image/loJE8i2vas9WV3cTjbBsZjqZXz0/480/560.jpg",
    url: "https://teespring.com/debris-hoodie?tsmac=store&tsmic=benthos",
  },
];
</script>

<template>
  <div>
    <Section
      title="Merch"
      class="bg-white bg-grain bg-cover bg-center lg:pt-6 lg:pb-16"
    >
      <div class="flex flex-row flex-wrap justify-around">
        <MerchBox
          class="m-4 bg-[#f6f6f8] drop-shadow-lg"
          v-for="article in teespringArticles"
          :key="article.title"
          :title="article.title"
          :price="article.price"
          :image-url="article.imageUrl"
          :article-url="article.url"
        ></MerchBox>
      </div>
    </Section>

    <Section title="Music" class="bg-ii bg-cover bg-center text-white lg:py-8">
      <div class="flex flex-row flex-wrap justify-around">
        <MerchBox
          class="m-4 bg-[#FFF] text-black"
          v-for="article in bigCartelArticles"
          :key="article.title"
          :title="article.title"
          :price="article.price"
          :image-url="article.imageUrl"
          :article-url="article.url"
        ></MerchBox>
      </div>
    </Section>
  </div>
</template>

<style scoped></style>
