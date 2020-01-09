import Choices from 'choices.js'

export function selectControl(triggerElement) {
  let selectArray = document.querySelectorAll(triggerElement)

  Array.prototype.forEach.call(selectArray, function (selectItem) {
    let searchMode = (selectItem.getAttribute('data-search') == 'true')
    new Choices(selectItem, {
      searchPlaceholderValue: 'Search',
      searchEnabled: searchMode,
      searchChoices: true,
      searchFloor: 1,
      searchResultLimit: 5,
      itemSelectText: '',
    })
  })
}
