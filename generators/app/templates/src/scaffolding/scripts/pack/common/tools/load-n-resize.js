export function initLoadNResize(functionsArray, controlMode) {
  // vanilla js load and resize function array controller
  if (window.attachEvent) {
    if (controlMode === 'load' || controlMode === 'loadnresize') {
      window.attachEvent('onload', function () {
        functionsArray.forEach(function (functionsArray) {
          functionsArray()
        })
      })
    }

    if (controlMode === 'resize' || controlMode === 'loadnresize') {
      window.attachEvent('onresize', function () {
        functionsArray.forEach(function (functionsArray) {
          functionsArray()
        })
      })
    }
  } else if (window.addEventListener) {
    if (controlMode === 'load' || controlMode === 'loadnresize') {
      window.addEventListener('load', function () {
        functionsArray.forEach(function (functionsArray) {
          functionsArray()
        })
      }, true)
    }

    if (controlMode === 'resize' || controlMode === 'loadnresize') {
      window.addEventListener('resize', function () {
        functionsArray.forEach(function (functionsArray) {
          functionsArray()
        })
      }, true)
    }
  }
}
