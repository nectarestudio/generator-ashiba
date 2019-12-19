/* eslint-disable */
import { detectAdminBar } from './detect-wp-bar'
import { actionButtonsControl } from './action-buttons'
<% if (installsmoothscroll === true) { %>import LocomotiveScroll from 'locomotive-scroll'<% } %>

export function initialize() {
  // Detect if wp admin bar is active
  detectAdminBar('wpadminbar')

  // Init action buttons controller
  actionButtonsControl('click--trigger')

  // Selector background-image loader as data
  dataBackground('.background--trigger', 'background')

  <% if (installsmoothscroll === true) { %>
    var scroll = new LocomotiveScroll({
      el: document.querySelector('.content-wrapper'),
      smooth: true
  })
  <% } %>
}