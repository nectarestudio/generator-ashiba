export function dataBackground(trigger) {
  if ($(trigger).length !== 0) {
    $(trigger).each(function() {
      let backgroundUrl = $(this).data('background')
      $(this).css('background-image', 'url(' + backgroundUrl +')')
    })
  } else {
    console.log('dataBackground trigegr not found')
    return
  }
}

export function dataBackgroundColor(trigger, elementBefore) {
  if ($(trigger).length !== 0) {
    $(trigger).each(function() {
      let background = $(this).data('background-color')
      console.log(background)
      if(!elementBefore) {
        $(this).css('background', 'var(--' + background +')')
      } else {
        $(this + '::before').css('background', 'var(--' + background +')')
      }
    })
  } else {
    console.log('dataBackgroundColor trigegr not found')
    return
  }
}