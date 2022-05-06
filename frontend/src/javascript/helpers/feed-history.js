import getElement from "./get-element.js"

export default function feedHistory(history) {
  const list = getElement('data-history-list')
  for (const item of history) {
    const listItem = document.createElement('li')
    const title = document.createElement('h3')
    title.textContent = item.name
    const initialInfo = document.createElement('div')
    initialInfo.classList.add('list__item__initial')
    const initialValueTitle = document.createElement('p')
    initialValueTitle.textContent = 'valor inicial:'
    const initialValue = document.createElement('span')
    initialValue.textContent = item.initialValue
    initialInfo.appendChild(initialValueTitle)
    initialInfo.appendChild(initialValue)
    const finalInfo = document.createElement('div')
    finalInfo.classList.add('list__item__initial')
    const finalValueTitle = document.createElement('p')
    finalValueTitle.textContent = `valor a retirar (${new Date(item.dateOut).toLocaleDateString()})`
    const finalValue = document.createElement('span')
    finalValue.textContent = item.finalValue
    finalInfo.appendChild(finalValueTitle)
    finalInfo.appendChild(finalValue)
    listItem.appendChild(title)
    listItem.appendChild(initialInfo)
    listItem.appendChild(finalInfo)
    list.appendChild(listItem)
  }
}
