export function debugMode() {  
  let bodyObject = document.querySelector('body')
  let debugObject = document.querySelector('.debug-wrapper')
  
  document.addEventListener('keydown', function(event) {
    event.stopImmediatePropagation()

    if (event.key === 'd') {
     debugObject.classList.toggle('debug')
     bodyObject.classList.toggle('has-debug')
     event.stopPropagation()
    }

    if (event.key === 'f') {
      debugObject.classList.toggle('fill')
      event.stopPropagation()
     }

     if (event.key === 'b') {
      debugObject.classList.toggle('border')
      event.stopPropagation()
     }

     if (event.key === 'i') {
      debugObject.classList.toggle('info')
      event.stopPropagation()
     }

     if (event.key === 'n') {
      debugObject.classList.toggle('numbers')
      event.stopPropagation()
     }

     if (event.key === 'p') {
      if(bodyObject.classList.contains('has-debug')) {
        bodyObject.classList.toggle('show-padding')
        debugObject.classList.toggle('padding')
      }
      
      event.stopPropagation()
     }
  })
}

export function debugInfo() {
  let infoObject = document.querySelector('.debug-info')
  let breakpointValue, widthValue, viewportWidth, textContainer, widthContainer

  let breakpoint_xs = 448
  let breakpoint_sm = 596
  let breakpoint_md = 768
  let breakpoint_lg = 992
  let breakpoint_xl = 1200
  let breakpoint_xxl = 1440
  let breakpoint_uxl = 1600
  let breakpoint_uxxl = 1920

  viewportWidth = window.innerWidth

  if (viewportWidth <= breakpoint_xs) {
    breakpointValue = 'XS'
    widthValue = 448 + 'px'
  } else if (viewportWidth <= breakpoint_sm) {
    breakpointValue = 'SM'
    widthValue = 596 + 'px'
  } else if (viewportWidth <= breakpoint_md) {
    breakpointValue = 'MD'
    widthValue = 768 + 'px'
  } else if (viewportWidth <= breakpoint_lg) {
    breakpointValue = 'LG'
    widthValue = 992 + 'px'
  } else if (viewportWidth <= breakpoint_xl) {
    breakpointValue = 'XL'
    widthValue = 1200 + 'px'
  } else if (viewportWidth <= breakpoint_xxl) {
    breakpointValue = 'XXL'
    widthValue = 1440 + 'px'
  } else if (viewportWidth <= breakpoint_uxl) {
    breakpointValue = 'UXL'
    widthValue = 1600 + 'px'
  } else if (viewportWidth <= breakpoint_uxxl) {
    breakpointValue = 'UXXL'
    widthValue = 1920 + 'px'
  }
  textContainer = infoObject.querySelector('.debug__text')
  widthContainer = infoObject.querySelector('.debug__width')
  textContainer.textContent = breakpointValue
  widthContainer.textContent = widthValue
}