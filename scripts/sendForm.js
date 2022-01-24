const sendForm = () => {
  const btnOpen = document.querySelector('.card-details__button_delivery')
  const cardDetailsTitle = document.querySelector('.card-details__title')
  const modal = document.querySelector('.modal')
  const modalTitle = modal.querySelector('.modal__title')
  const modalClose = modal.querySelector('.modal__close')
  const modalSubmit = modal.querySelector(".modal__submit")
  const modalForm = modal.querySelector('form')

  btnOpen.addEventListener('click', () => {
    modal.style.display = 'flex'
    modalTitle.textContent = cardDetailsTitle.textContent
  })

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  modalSubmit.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const labels = modal.querySelectorAll('.modal__label')

    const sendMessage = {}

    labels.forEach(label => {
      const span = label.querySelector('span')
      const input = label.querySelector('input')

      sendMessage[span.textContent] = input.value
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendMessage),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {

      })
    e.target.reset()
  })
}

sendForm()