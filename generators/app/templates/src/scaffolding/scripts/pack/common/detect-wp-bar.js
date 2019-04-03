export function detectAdminBar(target) {
  let wpAdminbar = document.getElementById(target)
  let wpAdminbarHeight = 0;
  if(wpAdminbar != null) {
    wpAdminbarHeight = wpAdminbar.offsetHeight
  }
  $('.main-header').css('top', wpAdminbarHeight)
}
