export function inputObserver(elementTarget) {

  // create an observer instance
  var observeInput = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'placeholder') {
        //
      }
    }) 
  })
  
  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true }
  
  // pass in the target node, as well as the observer options
  observeInput.observe(elementTarget, config)

  function inputChangeValidator(event){
    let targetParent = $(event.target).closest('.form-field')
    if( event.target.value !== '') {
      $(targetParent).addClass('has-data')
    } else {
      $(targetParent).removeClass('has-data')
    }
  }

  elementTarget.addEventListener(
    'input', inputChangeValidator
  )
}

export function inputObserverGravity(elementTarget) {

  // create an observer instance
  var observeInput = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'placeholder') {
        let targetParent = $(event.target).closest('.gfield')
        return targetParent
      }
    }) 
  })
  
  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true }
  
  // pass in the target node, as well as the observer options
  observeInput.observe(elementTarget, config)

  function inputChangeValidator(event){
    let targetParent = $(event.target).closest('.gfield')
    if( event.target.value !== '') {
      $(targetParent).addClass('has-data')
    } else {
      $(targetParent).removeClass('has-data')
    }
  }

  elementTarget.addEventListener(
    'input', inputChangeValidator
  )
}

export function selectObserver(elementTarget) {
  // let target = document.querySelector(element)
  let mutatedElement
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        mutatedElement = mutation.target
        mutatedElement.classList.add('has--data')
      }
      if (mutation.type === 'childList' && mutation.removedNodes.length) {
        mutatedElement = mutation.target
        mutatedElement.classList.remove('has--data')
      }

      if (mutation.type === 'attributes' && mutation.attributeName === 'placeholder') {
        mutatedElement = mutation.target
      }

      if (mutation.type === 'attributes') {
        mutatedElement = mutation.target

          let targetParent = $(mutatedElement).closest('.form-field')
          if( mutatedElement.value !== '') {
            $(targetParent).addClass('has-data')
          } else {
            $(targetParent).removeClass('has-data')
          }
      }
    })
  })
  let config = { attributes: true, childList: true, subtree: true, characterData: true }
  observer.observe(elementTarget, config)
}