import Swiper from 'swiper'

export function initSwiper() {
  let swipers = [] // Массив для хранения всех экземпляров свайперов

  function checkScreenWidth() {
    // Выбираем все элементы с классом .swiper
    const swiperElements = document.querySelectorAll('.swiper')

    if (window.innerWidth > 760) {
      // Если размер экрана больше 760px, уничтожаем все свайперы
      swipers.forEach((swiper) => {
        swiper.destroy(true, true)
        console.log('swiper полностью удален')
      })
      swipers = [] // Очищаем массив свайперов
    } else {
      // Если размер экрана меньше или равен 760px
      swiperElements.forEach((element) => {
        // Создаем новый свайпер только если его нет в массиве swipers
        if (!swipers.find((swiper) => swiper.el === element)) {
          swipers.push(
            new Swiper(element, {
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
          )
        }
      })
    }
  }

  window.addEventListener('load', checkScreenWidth)
  window.addEventListener('resize', checkScreenWidth)
}
