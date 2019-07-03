export function dataBackground(triggerTarget) {
  if (document.querySelectorAll(triggerTarget).length !== 0) {
    var triggerElement = document.querySelectorAll(triggerTarget)
    Array.prototype.forEach.call(triggerElement, function (targetElement) {
      var backgroundUrl = targetElement.getAttribute('data-background')
      targetElement.style.backgroundImage = ' url(' + backgroundUrl +')'
    })
  } else {
    console.log('dataBackground trigger not found')
    return
  }
}

export function dataBackgroundColor(triggerTarget) {
  if (document.querySelectorAll(triggerTarget).length !== 0) {
    var triggerElement = document.querySelectorAll(triggerTarget)
    Array.prototype.forEach.call(triggerElement, function (targetElement) {
      var backgroundColor = targetElement.getAttribute('data-background-color')
      targetElement.style.backgroundColor = ' var(--' + backgroundColor +')'
    })
  } else {
    console.log('dataBackgroundColor trigger not found')
    return
  }
}
