export function dataBackground(triggerTarget, modeControl) {
  if (document.querySelectorAll(triggerTarget).length !== 0) {
    var triggerElement = document.querySelectorAll(triggerTarget)
    Array.prototype.forEach.call(triggerElement, function (targetElement) {
      if (modeControl === 'background') {
        var backgroundUrl = targetElement.getAttribute('data-background')
        targetElement.style.backgroundImage = ' url(' + backgroundUrl + ')'
      }

      if (modeControl === 'color') {
        var backgroundColor = targetElement.getAttribute('data-background-color')
        targetElement.style.backgroundColor = ' var(--' + backgroundColor + ')'
      }
    })
  } else {
    console.log('dataBackground trigger not found')
    return
  }
}
