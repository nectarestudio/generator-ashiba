export function imageRatio(triggerElement, ratioValue) {
  if (document.querySelectorAll(triggerElement).length !== 0) {
    let triggerImages = document.querySelectorAll(triggerElement)

    Array.prototype.forEach.call(triggerImages, function (targetElement) {
      let targetWidth = targetElement.width()
      let targetHeight = targetWidth * ratioValue
      let ratioTarget = targetElement.querySelector('.ratio-set')
      ratioTarget.style.height = targetHeight
    })
  } else {
    console.log('imageRatio trigger not found')
    return
  }
}

