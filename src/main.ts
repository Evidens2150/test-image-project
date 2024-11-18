import { createApp } from 'vue'
import App from './App.vue'
import SwiperClass, { Pagination } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/main.scss'
import 'swiper/css'
import 'swiper/css/pagination'

SwiperClass.use([Pagination])

createApp(App).use(VueAwesomeSwiper).mount('#app')
