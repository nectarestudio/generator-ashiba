export function getProperty(targetElement, propertyType) {
  let propertyValue, targetObject
  targetObject = $(document).find(targetElement)
  propertyValue = parseInt($(targetObject).css(propertyType))
  return (propertyValue)
}

export function getPosition(targetElement, positionType) {
  let positionValue, targetObject
  targetObject = $(targetElement).position()
  if (positionType == 'left') {
    positionValue = targetObject.left
  }
  if (positionType == 'top') {
    positionValue = targetObject.top
  }
  return (parseInt(positionValue, 10))
}

export function getOffset(targetElement, offsetType) {
  let offsetValue, targetObject
  targetObject = $(targetElement).offset()
  if (offsetType == 'left') {
    offsetValue = targetObject.left
  }
  if (offsetType == 'top') {
    offsetValue = targetObject.top
  }
  return (offsetValue)
}

export function getDimensions(targetElement, dimensionType) {
  let dimensionValue, targetObject
  targetObject = $(targetElement)[0].getBoundingClientRect()
  if (dimensionType == 'width') {
    dimensionValue = targetObject.width
  }
  if (dimensionType == 'height') {
    dimensionValue = targetObject.height
  }
  return (dimensionValue)
}

export function setProperty(targetElement, propertyType, propertyValue) {
  $(targetElement).css(propertyType, propertyValue)
}

export function setOffset(targetElement, offsetTop, offsetleft) {
  $(targetElement).offset({
    top: offsetTop,
    left: offsetleft,
  })
}