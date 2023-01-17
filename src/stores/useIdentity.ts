import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import axios from 'axios';

export const useIdentityStore = defineStore('identity', () => {
  const currentUser = ref();
  const isLoggedIn = computed(() => !!currentUser.value);

  const functionUri = "/.netlify/functions/authenticateUser";
  const login = async (loginData: { username: string, password: string }) => {
    try {
      const response = await axios.post(functionUri, loginData);
      currentUser.value = response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? error.message);
    }
  };

  const wakeUpFunction = () => axios.get(functionUri);
  
  return { currentUser, isLoggedIn, login, wakeUpFunction };
});
