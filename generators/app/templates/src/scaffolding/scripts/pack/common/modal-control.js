export function modalControl(action, targetElement, bodyClass) {
  let targeObject = document.querySelector(targetElement)
  let bodyObject = document.querySelector('body')
  if (action === 'openModal') {
    targeObject.classList.toggle('is-open')
    targeObject.classList.toggle(bodyClass)
  }

  if (action === 'closeModal') {
    targeObject.classList.toggle('is-open')
    targeObject.classList.toggle(bodyClass)
  }
}

