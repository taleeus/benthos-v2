<script setup lang="ts">
import Section from "../components/Section.vue";
import MerchBox from "../components/MerchBox.vue";

const bigCartelArticles = [
  {
    title: "II T-Shirt",
    price: "€ 7.00 (Sale)",
    imageUrl:
      "https://assets.bigcartel.com/product_images/350061781/Maglia+logo+Chiaro.png?auto=format&fit=max&w=1300",
    url: "https://benthosmerch.bigcartel.com/product/ii-t-shirt",
  },
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
    price: "€ 24.98",
    imageUrl:
      "https://vangogh.teespring.com/v3/image/loJE8i2vas9WV3cTjbBsZjqZXz0/480/560.jpg",
    url: "https://teespring.com/debris-hoodie?tsmac=store&tsmic=benthos",
  },
];
</script>

<template>
  <div>
    <Section title="Big Cartel" class="bg-black text-white">
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
    <Section title="Teespring" class="bg-egg">
      <div class="flex flex-row flex-wrap justify-around">
        <MerchBox
          class="m-4 bg-[#f6f6f8]"
          v-for="article in teespringArticles"
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
