<script setup lang="ts">
import { onMounted } from "vue";
import router from "../router";
import { useIdentityStore } from "../stores/useIdentity";
import netlifyIdentity from "netlify-identity-widget";

const store = useIdentityStore();

onMounted(() => {
  netlifyIdentity.init();
  netlifyIdentity.open();
  netlifyIdentity.on("error", console.error);
  netlifyIdentity.on("login", (user) => {
    store.setUser(user);
    router.push({ name: "Epk" });
  });
});
</script>

<template>
  <div class="w-full h-screen bg-black"></div>
</template>

<style scoped></style>
