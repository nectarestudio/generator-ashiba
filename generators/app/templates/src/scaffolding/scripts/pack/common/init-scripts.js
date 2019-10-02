/* eslint-disable */
import { detectAdminBar } from './detect-wp-bar'
import { actionButtonsControl } from './action-buttons'
<% if (installinview === true) { %>import { inViewport } from './in-viewport'<% } %>
<% if (installsmoothscroll === true) { %>import { LocomotiveScroll } from 'locomotive-scroll'<% } %>

export function initialize() {
  // Detect if wp admin bar is active
  detectAdminBar('wpadminbar')

  // Init action buttons controller
  actionButtonsControl('click--trigger')

  // Selector background-image loader as data
  dataBackground('.background--trigger')

  <% if (installsmoothscroll === true) { %>
    var scroll = new LocomotiveScroll({
      el: document.querySelector('.wrapper'),
      smooth: true
  })
  <% } %>
  $(window).on('load', function() {
    <% if (installinview === true) { %>inViewport('.inview--trigger', 90)<% } %>
  })
}