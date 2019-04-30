export function detectAdminBar(target) {
  if ( $(target).length != 0) {
    let wpAdminbar = document.getElementById(target)
    let wpAdminbarHeight = 0;
    if(wpAdminbar != null) {
      wpAdminbarHeight = wpAdminbar.offsetHeight
    }

    if($('.main-header').length != 0) {
      $('.main-header').css('top', wpAdminbarHeight)
    }
  } else {
    return
  }
}
