/* eslint-disable */
import { detectAdminBar } from './detect-wp-bar'
import { actionButtonsControl } from './action-buttons'
<% if (installinview === true) { %>import { inViewport } from './in-viewport'<% } %>
<% if (installsmoothscroll === true) { %>import * as SmoothScroll from 'smoothscroll-for-websites'<% } %>


export function initialize() {
  // Detect if wp admin bar is active
  if ($('#wpadminbar').length != 0) {
    detectAdminBar('wpadminbar')
  }

  if ($('.click--trigger').length != 0) {
    actionButtonsControl('click--trigger')
  }
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
    if ($('.inview--trigger').length != 0) {
      inViewport('.inview--trigger', 90)
		}
  })
}