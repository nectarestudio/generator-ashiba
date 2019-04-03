import { mobileMenu } from './mobile-menu'
import { modalControl } from './modal-control'

export function actionButtonsControl(trigger) {
  let triggerButton = document.getElementsByClassName(trigger)

  if (triggerButton) {
    Array.prototype.forEach.call(triggerButton, function(element) {
      element.addEventListener('click', actionControl, false)
    })
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
}
