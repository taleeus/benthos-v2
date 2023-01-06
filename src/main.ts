import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import './style.css'
import 'vue3-carousel/dist/carousel.css'

import FontAwesomeIcon from './utilities/fontawesome-icons'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueSweetalert2)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .component("Carousel", Carousel)
  .component("Slide", Slide)
  .component("Pagination", Pagination)
  .component("Navigation", Navigation)
  .mount('#app')
