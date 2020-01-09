/* eslint-disable */
import { initLoadNResize } from './tools/load-n-resize'
import { interceptionObserverControl } from './tools/interception-control'
import { actionButtonsControl } from './action-buttons'
import { debugMode, debugInfo } from './tools/debug'
import { inputInit } from './input-control'
import { inputObserver, inputObserverGravity, selectObserver } from './tools/mutation-observer'
<% if (installinview === true) { %>import { inViewport } from './in-viewport'<% } %>
import { selectControl } from './select-control'
import { actionButtonsControl } from './action-buttons'
<% if (installsmoothscroll === true) { %>import * as SmoothScroll from 'smoothscroll-for-websites'<% } %>

export function initialize() {
  // vanilla js functions on load and resize
  var loadArray = [
    // Init action buttons controller
    function () {
      actionButtonsControl('.click-trigger')
    },
    // Init Interception Observer controller
    function () {
      interceptionObserverControl('.interception-observer')
    },
    // Init Gravity Inputs & Observer
    function () {
      inputInit('.gfield input')
    },
    function () {
      inputObserverGravity('.gfield input')
    },
    // Init Standard Inputs & Observer
    function () {
      inputInit('.form-field input')
    },
    function () {
      inputObserver('.form-field input')
    },
    // Select Init
    function() {
      selectObserver('.select-container')
    },

    <% if (installinview === true) { %>
    // In View
    function () {
      inViewport('.inview-trigger', 50)
    },
    <% } %>
    <% if (installsmoothscroll === true) { %>
      // eslint-disable-next-line no-unused-vars
    function () {
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
    },
    <% } %>
    <% if (installchoices=== true) { %>
    // Choices
    function() {
      selectControl('.select-container')
    },
    <% } %>
  ]

  var loadnresizeArray = [
    // Debug Mode
     function () {
       debugMode()
     },
     function () {
       debugInfo()
     },
  ]
  initLoadNResize(loadArray, 'load')
  initLoadNResize(loadnresizeArray, 'loadnresize')
}