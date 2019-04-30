import { InView } from 'inview'
import { TweenMax, Power1 } from 'gsap/TweenMax'

export function inViewport(target, offset) {
  if ($(target).length !== 0) {
    $(target).each(function () {
      let that = this
      var inview = InView(this, function (isInView, data) {
        if (isInView) {
          if (data.elementOffsetTopInViewHeight < data.inViewHeight - offset) {
            TweenMax.staggerTo($(that).find('.in-view'), .7, {y:'0', opacity:1, ease:Power1.easeOut, onComplete: destroyStagger, onCompleteParams:['{self}']}, 0.08)
            this.destroy()
          }
          return inview
        }
      })

      function destroyStagger() {
        this.target.classList.remove('in-view')
      }
    })
  } else {
    console.log('inViewport target not found')
    return
  }
}
