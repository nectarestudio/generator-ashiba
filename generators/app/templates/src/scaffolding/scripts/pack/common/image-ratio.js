export function imageRatio(trigger, ratio) {
  if ($(trigger).length != 0) {
    $(trigger).each(function () {
      let targetWidth = $(this).width()
      let targetHeight = targetWidth * ratio
      $(this).find('.ratio-set').css('height', targetHeight)
    })
  } else {
    console.log('dataBackground trigegr not found')
    return
  }
}
