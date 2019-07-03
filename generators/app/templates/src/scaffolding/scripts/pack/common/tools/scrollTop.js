let stepInstance = 0
let stepTime = 10

function scroller() {
  if (window.pageYOffset === 0) {
    clearInterval(stepInstance)
  }
  window.scroll(0, window.pageYOffset - 50);
}

export function scrollTop() {
  stepInstance = setInterval(scroller, stepTime)
}
