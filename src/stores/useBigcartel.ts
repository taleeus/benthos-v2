import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { DataAttributes, Product, Response } from "../types/bigcartel.types";
import { Merch } from "../types/merch.types";

export const useBigcartelStore = defineStore("bigcartel", () => {
  const merch = ref<Merch[]>([]);
  const fetchMerch = async () => {
    const accountId = import.meta.env.VITE_BIGCARTEL_ACCOUNT_ID;
    const response = await axios.get(
      `https://api.bigcartel.com/v1/accounts/${accountId}/products`,
      {
        auth: {
          username: import.meta.env.VITE_BIGCARTEL_USERNAME,
          password: import.meta.env.VITE_BIGCARTEL_PASSWORD,
        },
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        }
      },
    );

    const bigcartelResponse = response.data as Response<Product>;
    merch.value = (bigcartelResponse.data as DataAttributes<Product>[]).map((e) => ({
      name: e.attributes.name,
      description: e.attributes.description,
      price: `€ ${Number.parseFloat(e.attributes.default_price).toFixed(2)}`,
      position: e.attributes.position,
      url: e.attributes.url,
      imageUrl: e.attributes.primary_image_url,
      onSale: e.attributes.on_sale,
    }));

    return merch;
  };


  fetchMerch();
  return { merch, fetchMerch };
});
