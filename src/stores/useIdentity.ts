import { defineStore } from 'pinia'
import netlifyIdentity from 'netlify-identity-widget';
import { ref, computed } from 'vue';

export const useIdentityStore = defineStore('identity', () => {
  netlifyIdentity.init(); 
  
  const currentUser = ref(netlifyIdentity.currentUser());
  const isLoggedIn = computed(() => !!currentUser.value)
  const setUser = (user: netlifyIdentity.User) => currentUser.value = user;
  
  return { currentUser, isLoggedIn, setUser };
});
