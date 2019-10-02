export function getProperty(targetElement, propertyType) {
  let propertyValue, targetObject
  targetObject = document.querySelector(targetElement)
  propertyValue = parseInt(targetObject.style.propertyType, 10)
  return (propertyValue)
}

export function getPosition(targetElement, positionType) {
  let positionValue, targetObject
  targetObject = document.querySelector(targetElement).position()
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
  targetObject = document.querySelector(targetElement).offset()
  if (offsetType == 'left') {
    offsetValue = targetObject.left
  }
  if (offsetType == 'top') {
    offsetValue = targetObject.top
  }
  return (offsetValue)
}

export function getDimensions(targetElement, dimensionType) {
  let dimensionValue, targetDimension
  targetDimension = targetElement.getBoundingClientRect()
  if (dimensionType == 'width') {
    dimensionValue = targetDimension.width
  }
  if (dimensionType == 'height') {
    dimensionValue = targetDimension.height
  }
  return (dimensionValue)
}

export function setProperty(targetElement, propertyType, propertyValue) {
  let targetObject = document.querySelector(targetElement)
  targetObject.style.propertyType = propertyValue
}

export function setOffset(targetElement, offsetTop, offsetleft) {
  document.querySelector(targetElement).offset({
    top: offsetTop,
    left: offsetleft,
  })
}

export function removeClassByPrefix(targetElement, prefixString) {
  var regExpObject = new RegExp('\\b' + prefixString + '\\w+', 'g');
  targetElement.className = targetElement.className.replace(regExpObject, '');
  return targetElement;
}
