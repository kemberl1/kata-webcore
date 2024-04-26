export function initializeShowMore() {
  let showMoreButtons = document.querySelectorAll('.button__show-more')

  showMoreButtons.forEach((elem) => {
    const showText = 'Читать далее'
    const hideText = 'Скрыть'

    elem.addEventListener('click', () => {
      const contentContainer =
        elem.parentNode.querySelector('.content-container')

      contentContainer.classList.toggle('content-container-show--full')

      elem.classList.toggle('button__show-more--open')
      if (contentContainer.classList.contains('content-container-show--full')) {
        setTimeout(() => {
          elem.textContent = hideText // Устанавливаем текст кнопки после задержки
        }, 300)
      } else {
        setTimeout(() => {
          elem.textContent = showText // Устанавливаем текст кнопки после задержки
        }, 900)
      }
    })
  })
}
