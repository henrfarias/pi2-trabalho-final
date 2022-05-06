export default async function showError(message) {
  const [main] = document.getElementsByTagName('main')
  if(main.querySelector('.modal_error')) return
  const modal = document.createElement('div')
  modal.classList.add('modal_error')
  const error = document.createElement('p')
  error.textContent = message
  modal.appendChild(error)
  main.appendChild(modal)
  setTimeout(() => {
    modal.remove()
  }, 3000)
}