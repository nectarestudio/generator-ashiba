import 'intersection-observer'

export function interceptionObserverControl(triggerElement) {
  if (document.querySelectorAll(triggerElement) !== null) {
    let triggerObject = document.querySelectorAll(triggerElement)

    Array.prototype.forEach.call(triggerObject, function (element) {
      let targetObserver
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: buildThresholdList(),
      }
      targetObserver = new IntersectionObserver(handleIntersect, options)
      targetObserver.POLL_INTERVAL = 100
      targetObserver.observe(element)
    })
  } else {
    console.log('interceptionObserverControl target not found')
    return
  }
}

function buildThresholdList() {
  let thresholds = []
  let numSteps = 20
  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }
  thresholds.push(0)
  return thresholds
}

function handleIntersect(entries) {
  entries.forEach((entry) => {
    let tresholdRatio = entry.target.getAttribute('data-treshold')
    if (entry.intersectionRatio <= tresholdRatio) {
      interceptionControl(entry.target, 'offView')
    } else {
      interceptionControl(entry.target, 'inView')
    }
  })
}

function interceptionControl(triggerObject, observerStatus) {
  let actionType = triggerObject.getAttribute('data-action')
  switch (actionType) {
    case '':
      break
  }
}
