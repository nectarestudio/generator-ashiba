export function inputInit(triggerElement, inputMode) {
  if (document.querySelectorAll(triggerElement).length !== 0) {
    let targetObject = document.querySelectorAll(triggerElement)
    let targetClass

    Array.prototype.forEach.call(targetObject, function (targetElement) {
      if (inputMode === 'gravity') {
        targetClass = '.gfield'
      } else {
        targetClass = '.form-field'
      }
      let targetParent = targetElement.vanillaClosest(targetClass, function (returnElement) {
        if (targetElement.value !== '') {
          targetParent.classList.add('has-data')
        }
        return returnElement.className === targetClass
      })
    })
  } else {
    console.log('inputInit target not found')
    return
  }
}

export function vanillaClosest(targetElement, functionObject) {
  return targetElement && (functionObject(targetElement) ? targetElement : vanillaClosest(targetElement.parentNode, functionObject))
}
