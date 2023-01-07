import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import axios from 'axios';

export const useIdentityStore = defineStore('identity', () => {
  const currentUser = ref();
  const isLoggedIn = computed(() => !!currentUser.value);

  const functionUri = "/.netlify/functions/authenticateUser";
  const login = async (loginData: { username: string, password: string }) => {
    const response = await axios.post(functionUri, loginData);
    if (response?.status != 200) {
      throw new Error(response?.data?.message ?? "Unknown error");
    }

    currentUser.value = response.data;
  };

  const wakeUpFunction = () => axios.get(functionUri);
  
  return { currentUser, isLoggedIn, login, wakeUpFunction };
});
