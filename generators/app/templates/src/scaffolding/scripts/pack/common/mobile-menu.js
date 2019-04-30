export function mobileMenu(menuTarget, action) {
  if ($(menuTarget).length != 0) {
    if (action == 'open') {
      $(menuTarget).addClass('nav-open')
      $('body').addClass('has-menu')
    }
    if (action == 'close') {
      $(menuTarget).removeClass('nav-open')
      $('body').removeClass('has-menu')
    }
  } else {
    console.log('mobileMenu menuTarget not found')
    return
  }
}
