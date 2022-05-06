export default function showInvestmentResult(investment) {
  const main = document.querySelector('main')
  const result = document.createElement('section')
  result.classList.add('container__result')
  result.innerHTML = `
    <h3>Simulação</h3>
    <ul class="result__info">
      <li><p>Nome: <strong>${investment.name}</strong></p></li>
      <li><p>Valor inicial: <strong>R$ ${investment.initialValue}</strong></p></li>
      <li><p>Juros anual: <strong>${investment.annualInterest} %</strong></p></li>
      <li><p>Contribuição mensal: <strong>R$ ${investment.monthlyContribution}</strong></p></li>
      <li><p>Valor final: <strong>R$ ${Number(investment.withdraw).toFixed(2)}</strong></p></li>
      <li><p>Data de aplicação: <strong>${new Date(investment.applicationDate).toLocaleDateString('en')}</strong></p></li>
      <li><p>Data de retirada: <strong>${new Date(investment.dueDate).toLocaleDateString('en')}</strong></p></li>
    </ul>
  `
  main.appendChild(result)
}
