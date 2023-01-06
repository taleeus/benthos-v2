import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import axios from 'axios';

export const useIdentityStore = defineStore('identity', () => {  
  const currentUser = ref();
  const isLoggedIn = computed(() => !!currentUser.value);

  const login = async (loginData: { username: string, password: string }) => {
    const response = await axios.post("/.netlify/functions/authenticateUser", loginData);
    if (response?.status != 200) {
      throw new Error(response?.data?.message ?? "Unknown error");
    }

    currentUser.value = response.data;
  };
  
  return { currentUser, isLoggedIn, login };
});
