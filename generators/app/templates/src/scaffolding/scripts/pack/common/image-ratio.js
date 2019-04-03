export function imageRatio(trigger, ratio) {
  $(trigger).each(function() {
    let targetWidth = $(this).width()
    let targetHeight = targetWidth * ratio
    $(this).find('.ratio-set').css('height', targetHeight)
  })
}
