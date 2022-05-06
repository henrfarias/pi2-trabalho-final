export default async function showMessage(message) {
  const [main] = document.getElementsByTagName('main')
  if(main.querySelector('.modal_message')) return
  const modal = document.createElement('div')
  modal.classList.add('modal_message')
  const error = document.createElement('p')
  error.textContent = message
  modal.appendChild(error)
  main.appendChild(modal)
  setTimeout(() => {
    modal.remove()
  }, 3000)
}