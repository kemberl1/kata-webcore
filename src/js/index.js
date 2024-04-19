import '../scss/style.scss'
import { initializeShowMore } from './show-more'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import { initSwiper } from './swiper'
Swiper.use([Pagination, Autoplay])

document.addEventListener('DOMContentLoaded', function () {
  initSwiper()
  initializeShowMore()
})
