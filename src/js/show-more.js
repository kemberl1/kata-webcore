export function initializeShowMore() {
  let showMoreButtons = document.querySelectorAll('.button__show-more')

  showMoreButtons.forEach((elem) => {
    const initialText = elem.dataset.initialText

    elem.addEventListener('click', () => {
      const contentContainer =
        elem.parentNode.querySelector('.content-container')

      contentContainer.classList.toggle('content-container-show--full')

      elem.classList.toggle('button__show-more--open')
      if (contentContainer.classList.contains('content-container-show--full')) {
        elem.textContent = 'Скрыть'
      } else {
        elem.textContent = initialText
      }
    })
  })
}
