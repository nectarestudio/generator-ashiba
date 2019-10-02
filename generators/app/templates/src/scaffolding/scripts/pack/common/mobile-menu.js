export function mobileMenu(menuTarget, action) {
  if (document.querySelector(menuTarget).length !== 0) {
    let menuObject = document.querySelector(menuTarget)
    let bodyObject = document.querySelector('body')
    if (action == 'open') {
      menuObject.classList.add('nav-open')
      bodyObject.classList.add('has-menu')
    }
    if (action == 'close') {
      menuObject.classList.remove('nav-open')
      bodyObject.classList.remove('has-menu')
    }
  } else {
    console.log('mobileMenu menuTarget not found')
    return
  }
}
