export function modalControl(action, target, bodyClass) {
  if (action === 'openModal') {
    $(target).toggleClass('is-open')
    $('body').toggleClass(bodyClass)
  }

  if (action === 'closeModal') {
    $(target).toggleClass('is-open')
    $('body').toggleClass(bodyClass)
  }
}

