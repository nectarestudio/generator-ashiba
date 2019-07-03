export function initLoad(functionsArray) {
  // vanilla js load function array controller
  if (window.attachEvent) {
    window.attachEvent('onload', function () {
      functionsArray.forEach(function (functionsArray) {
        functionsArray()
      })
    })
  } else window.addEventListener('load', function () {
      functionsArray.forEach(function (functionsArray) {
        functionsArray()
      })
  })
}

export function initResize(functionsArray) {
  // vanilla js resize function array controller
  if (window.attachEvent) {
    window.attachEvent('onresize', function () {
      functionsArray.forEach(function (functionsArray) {
        functionsArray()
      })
    })
  } else if (window.addEventListener) {
    window.addEventListener('resize', function () {
      functionsArray.forEach(function (functionsArray) {
        functionsArray()
      })
    }, true)
  }
}

export function initLoadNResize(functionsArray) {
  // vanilla js load and resize function array controller
  if (window.attachEvent) {
    window.attachEvent('onload', function () {
      functionsArray.forEach(function (functionsArray) {
        functionsArray()
      })
    })
  } else window.addEventListener('load', function () {
      functionsArray.forEach(function (functionsArray) {
        functionsArray()
      })
  })

  if (window.attachEvent) {
    window.attachEvent('onresize', function () {
      functionsArray.forEach(function (functionsArray) {
        functionsArray()
      })
    })
  } else if (window.addEventListener) {
    window.addEventListener('resize', function () {
      functionsArray.forEach(function (functionsArray) {
        functionsArray()
      })
    }, true)
  }
}
