import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './style.css'
import 'vue3-carousel/dist/carousel.css'

import FontAwesomeIcon from './utilities/fontawesome-icons'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

createApp(App)
  .use(router)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .component("Carousel", Carousel)
  .component("Slide", Slide)
  .component("Pagination", Pagination)
  .component("Navigation", Navigation)
  .mount('#app')
