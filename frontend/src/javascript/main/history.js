import feedHistory from "../helpers/feed-history.js"
import getElement from "../helpers/get-element.js"
import showError from "../helpers/show-error.js"

const historyPage = async () => {
  const IOButton = getElement('data-io-button')
  const token = sessionStorage.getItem('token')
  if (!token) {
    window.location.href = '/pages/login.html'
  }
  const response = await fetch('http://localhost:3000/history', {
    method: 'GET',
    mode: 'cors',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    keepalive: true,
  })
  if (response.status !== 200) {
    showError('Não foi possível carregar seu histórico')
  } else {
    const result = await response.json()
    feedHistory(result.history)
  }
  IOButton.addEventListener('click', async () => {
    sessionStorage.removeItem('token')
  })
}

historyPage()