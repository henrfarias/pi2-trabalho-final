import getElement from '../helpers/get-element.js'
import showError from '../helpers/show-error.js'
import showInvestmentResult from '../helpers/show-investment-result.js'
import showMessage from '../helpers/show-message.js'

const formPage = () => {
  const submitButton = getElement('data-submit')
  const name = getElement('data-name')
  const value = getElement('data-value')
  const monthlyContribution = getElement('data-month')
  const interest = getElement('data-interest')
  const dateIn = getElement('data-application-date')
  const dateOut = getElement('data-due-date')
  const IOButton = getElement('data-io-button')
  if (sessionStorage.getItem('token')) {
    IOButton.textContent = 'Sair'
  }
  IOButton.addEventListener('click', function() {
    if (!sessionStorage.getItem('token')) {
      window.location.href = '/pages/login.html'
      return
    }
    sessionStorage.removeItem('token')
    IOButton.textContent = 'Entrar'
    return
  })
  submitButton.addEventListener('click', async () => {
    if (
      !name.value ||
      !value.value ||
      !interest.value ||
      !dateIn.value ||
      !dateOut.value
    ) {
      showError(
        'Todos os campos são obrigatórios, com excessão do investimento mensal'
      )
      return
    }
    if (!sessionStorage.getItem('token')) {
      const response = await fetch('http://localhost:3000/simulation', {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          initialValue: +value.value,
          monthlyContribution: +monthlyContribution.value,
          annualInterest: +interest.value,
          applicationDate: dateIn.value,
          dueDate: dateOut.value,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        mode: 'cors',
        keepalive: true,
      })
      if (!response.ok) {
        showError('Não foi possível simular o investimento')
      }
      const result = await response.json()
      showInvestmentResult(result)
      showMessage('Faça login para salvar suas simulações')
      return
    }
    const response = await fetch('http://localhost:3000/investment', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        initialValue: +value.value,
        monthlyContribution: +monthlyContribution.value,
        annualInterest: +interest.value,
        applicationDate: dateIn.value,
        dueDate: dateOut.value,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
      mode: 'cors',
      keepalive: true,
    })
    if (!response.ok) {
      showError('Não foi possível simular o investimento')
    }
    const result = await response.json()
    showInvestmentResult(result)
  })
}

formPage()
