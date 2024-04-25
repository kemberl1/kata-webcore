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
        elem.textContent = hideText
      } else {
        elem.textContent = showText
      }
    })
  })

  // Добавляем обработчик для изменения текста кнопки при удалении класса button__show-more--open
  window.addEventListener('resize', () => {
    // Удаляем классы content-container-show--full у всех элементов
    let contentContainers = document.querySelectorAll('.content-container')
    contentContainers.forEach((container) => {
      container.classList.remove('content-container-show--full')
    })

    // Удаляем классы button__show-more--open у всех кнопок
    let showMoreButtons = document.querySelectorAll('.button__show-more')
    showMoreButtons.forEach((button) => {
      button.classList.remove('button__show-more--open')
      button.textContent = 'Читать далее'
    })
  })
}
