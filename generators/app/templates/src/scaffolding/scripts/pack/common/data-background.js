export function dataBackground(trigger) {
  $(trigger).each(function() {
    let backgroundUrl = $(this).data('background')
    $(this).css('background-image', 'url(' + backgroundUrl +')')
  })
}

export function dataBackgroundColor(trigger, elementBefore) {
  $(trigger).each(function() {
    let background = $(this).data('background-color')
    console.log(background)
    if(!elementBefore) {
      $(this).css('background', 'var(--' + background +')')
    } else {
      $(this + '::before').css('background', 'var(--' + background +')')
    }
  })
}