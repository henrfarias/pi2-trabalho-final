import getElement from '../helpers/get-element.js'
import showError from '../helpers/show-error.js'
import showMessage from '../helpers/show-message.js'

const loginPage = () => {
  const submitButton = getElement('data-submit')
  const user = getElement('data-login-user')
  const password = getElement('data-login-password')
  const params = new URLSearchParams(window.location.search)
  if (params.has('registered')) {
    showMessage('Usuário registrado com sucesso')
  }
  submitButton.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        username: user.value,
        password: password.value,
      }),
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
    })
    if (response.status !== 200) {
			await showError('Seu usuário ou sua senha estão incorretos')
			return
		}
		const body = await response.json()
		sessionStorage.setItem('token', body.token)
		window.location.href = '/pages/history.html'		
  })
}

loginPage()
