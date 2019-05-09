/* eslint-disable */
import { detectAdminBar } from './detect-wp-bar'
import { actionButtonsControl } from './action-buttons'
<% if (installinview === true) { %>import { inViewport } from './in-viewport'<% } %>
<% if (installsmoothscroll === true) { %>import * as SmoothScroll from 'smoothscroll-for-websites'<% } %>

export function initialize() {
  // Detect if wp admin bar is active
  detectAdminBar('wpadminbar')

  // Init action buttons controller
  actionButtonsControl('click--trigger')

  // Selector background-image loader as data
  dataBackground('.background--trigger')

  <% if (installsmoothscroll === true) { %>
  SmoothScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 120,
    pulseAlgorithm: true,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 10,
    accelerationMax: 0.8,
    keyboardSupport: true,
    arrowScroll: 50,
    fixedBackground: true,
  })
  <% } %>
  $(window).on('load', function() {
    <% if (installinview === true) { %>inViewport('.inview--trigger', 90)<% } %>
  })
}