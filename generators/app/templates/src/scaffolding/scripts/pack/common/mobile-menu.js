export function mobileMenu(menuTarget, action) {
  if (action == 'open') {
    $(menuTarget).addClass('nav-open')
    $('body').addClass('has-menu')
  }
  if (action == 'close') {
    $(menuTarget).removeClass('nav-open')
    $('body').removeClass('has-menu')
  }
}