export function inputInit(targetElement) {
  $(targetElement).each(function() {
    let targetParent = $(targetElement).closest('.form-field')
    if( targetElement.value !== '') {
      $(targetParent).addClass('has-data')
    }
  })
}

export function inputInitGravity(targetElement) {
  $(targetElement).each(function() {
    let targetParent = $(targetElement).closest('.gfield')
    if( targetElement.value !== '') {
      $(targetParent).addClass('has-data')
    }
  })
}