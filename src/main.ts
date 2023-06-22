import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import 'vue3-carousel/dist/carousel.css'
import './style.css'

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import FontAwesomeIcon from './utilities/fontawesome-icons'

import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from 'vue-sweetalert2'

import VLazyImage from 'v-lazy-image'

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
  .component("VLazyImage", VLazyImage)
  .mount('#app')
