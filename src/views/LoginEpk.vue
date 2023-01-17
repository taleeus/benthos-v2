<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "../components/Button.vue";

import { useIdentityStore } from "../stores/useIdentity";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();

const { login, wakeUpFunction } = useIdentityStore();

// ୧༼ಠ益ಠ༽︻╦╤─ Waking up lambda function and database
onMounted(wakeUpFunction);

const username = ref("");
const password = ref("");

const tryLogin = async () => {
  try {
    await login({
      username: username.value,
      password: password.value,
    });

    router.push({ name: "Epk" });
  } catch (error) {
    Swal.fire({
      text: (error as Error).message,
      toast: true,
      position: "bottom-right",
      confirmButtonColor: "black",
      // Overriding default swal2 class
      customClass: {},
    });
  }
};
</script>

<template>
  <div class="bg-grain flex h-screen w-full bg-black">
    <div class="m-auto block max-h-fit max-w-sm rounded-lg bg-white px-8 py-6 shadow-lg">
      <img src="/assets/logos/logo-black.svg" alt="Benthos Logo" class="mb-5" />
      <form class="grid grid-cols-1 gap-6" @submit.prevent="tryLogin">
        <label class="block">
          <span class="text-gray-700">Username</span>
          <input
            type="text"
            v-model="username"
            class="mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Password</span>
          <input
            type="password"
            v-model="password"
            class="mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
          />
        </label>
        <label class="ml-auto block">
          <Button class="button m-0 bg-gray-100">Login</Button>
        </label>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bg-black {
  background-color: #191919;
}
.button:hover {
  background-color: #191919;
  color: white;
}
</style>
