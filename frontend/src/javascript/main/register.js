import getElement from '../helpers/get-element.js'
import showError from '../helpers/show-error.js'

const registerPage = () => {
  const submitButton = getElement('data-submit')
  const name = getElement('data-register-name')
  const user = getElement('data-register-user')
  const password = getElement('data-register-password')
  submitButton.addEventListener('click', async () => {
    if (!name.value || !user.value || !password.value) {
      showError('Preencha todas as informações antes de avançar')
      return
    }
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        username: user.value,
        password: password.value,
      }),
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
    })
    if (response.status === 201) {
      window.location.href = '/pages/login.html?registered=true'
      return		
    }
    await showError('Houve algum problema ao cadastrar seu usuário')
    return
  })
}

registerPage()
