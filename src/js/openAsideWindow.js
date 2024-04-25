export function openAsideWindow() {
  document.body.addEventListener('click', function (event) {
    const target = event.target
    const button = target.closest('.open-button')
    const blur = document.querySelector('.blur-overlay')

    if (button) {
      const targetId = button.dataset.target
      const windowContainer = document.querySelector(
        `.aside-window[data-id="${targetId}"]`
      )

      if (windowContainer) {
        if (targetId === 'container1' || targetId === 'container2') {
          windowContainer.classList.toggle('form-open')
          blur.classList.toggle('blur-active')
        } else {
          windowContainer.classList.toggle('window--open')
          blur.classList.toggle('blur-active')
        }

        const isOpen =
          windowContainer.classList.contains('window--open') ||
          windowContainer.classList.contains('form-open')
        if (isOpen) {
          const allWindows = document.querySelectorAll('.aside-window')
          allWindows.forEach((window) => {
            if (window !== windowContainer) {
              window.classList.remove('window--open', 'form-open')
              blur.classList.add('blur-active')
            }
          })
        }
      }
    } else {
      const asideWindows = document.querySelectorAll('.aside-window')
      const clickedInsideWindow = target.closest('.aside-window')

      if (!clickedInsideWindow) {
        asideWindows.forEach((window) => {
          window.classList.remove('window--open', 'form-open')
          blur.classList.remove('blur-active')
        })
      }
    }
  })

  // Добавляем обработчик изменения размера окна
  window.addEventListener('resize', () => {
    // Проверяем ширину страницы
    if (window.innerWidth > 1439) {
      // Удаляем классы window-open и form-open
      const windows = document.querySelectorAll('.aside-window')
      windows.forEach((window) => {
        window.classList.remove('window--open', 'form-open')
      })
    }
  })
  const links = document.querySelectorAll('a')

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (link.getAttribute('href').startsWith('.')) {
        event.preventDefault() // Предотвращает переход по ссылке
      }
    })
  })
}
