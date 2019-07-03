import { mobileMenu } from './mobile-menu'
import { modalControl } from './modal-control'

export function actionButtonsControl(trigger) {
  if (document.querySelectorAll(trigger).length !== 0) {
    let triggerButtons = document.querySelectorAll(trigger)

    Array.prototype.forEach.call(triggerButtons, function(element) {
      element.addEventListener('click', actionControl, false)
    })
  } else {
    console.log('actionButtonsControl target not found')
    return
  }
}

function actionControl(event) {
  let actionType = this.getAttribute('data-action')
  switch (actionType) {
    case 'openMobileMenu':
      mobileMenu('.main-menu', 'open')
    break
    case 'closeMobileMenu':
      mobileMenu('.main-menu', 'close')
    break
    case 'openModal':
      modalControl('openModal', '.modal-name', 'has-modal', this)
    break
    case 'closeModal':
      modalControl('closeModal', '.modal-name', 'has-modal')
    break
  }
  event.stopPropagation()
}
