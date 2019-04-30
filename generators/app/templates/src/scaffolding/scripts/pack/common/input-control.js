export function inputInit(targetElement) {
  if ($(targetElement).length != 0) {
    $(targetElement).each(function () {
      let targetParent = $(targetElement).closest('.form-field')
      if (targetElement.value !== '') {
        $(targetParent).addClass('has-data')
      }
    })
  } else {
    console.log('inViewport target not found')
    return
  }
}

export function inputInitGravity(targetElement) {
  if ($(targetElement).length != 0) {
    $(targetElement).each(function () {
      let targetParent = $(targetElement).closest('.gfield')
      if (targetElement.value !== '') {
        $(targetParent).addClass('has-data')
      }
    })
  } else {
    console.log('inViewport target not found')
    return
  }
}
