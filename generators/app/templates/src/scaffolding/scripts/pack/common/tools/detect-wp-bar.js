export function detectAdminBar(targetElement) {
  if ( document.querySelector(targetElement).length !== 0) {
    let targetObject = document.querySelector(targetElement)
    let wpAdminbar = document.getElementById(targetElement)
    let wpAdminbarHeight = 0;
    if(wpAdminbar !== null) {
      wpAdminbarHeight = wpAdminbar.offsetHeight
    }

    if(document.querySelector('.main-header').length !== 0) {
      let headerElement = document.querySelector('.main-header')
      headerElement.style.top = wpAdminbarHeight
    }
  } else {
    return
  }
}
