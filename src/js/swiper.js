import Swiper from 'swiper'

export function initSwiper() {
  let swiperInstance = null

  function checkScreenWidth() {
    if (window.innerWidth > 760) {
      if (swiperInstance) {
        console.log('swiper полностью удален')
        swiperInstance.destroy(true, true)
        swiperInstance = null
      }
    } else {
      if (!swiperInstance) {
        swiperInstance = new Swiper('.swiper', {
          direction: 'horizontal',
          loop: false,
          slidesPerView: 'auto',
          spaceBetween: 16,
          slideToClickedSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: true
          },
          allowTouchMove: true
        })
      }
    }
  }
  window.addEventListener('load', checkScreenWidth)
  window.addEventListener('resize', checkScreenWidth)
}
