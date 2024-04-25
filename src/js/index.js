import '../scss/style.scss'
import { initializeShowMore } from './initializeShowMore'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import { initSwiper } from './initSwiper'
import { openAsideWindow } from './openAsideWindow'
Swiper.use([Pagination, Autoplay])

document.addEventListener('DOMContentLoaded', function () {
  initSwiper()
  initializeShowMore()
  openAsideWindow()
})
