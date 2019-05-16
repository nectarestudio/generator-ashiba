/*
 * When helper function to stop repeat myself
 * Wrapping When Function to pass the prompt Type
 * {
 *   when: when('something'),
 * }
 *
 * @param type (String)
 * @returns {function(*)}
 */

const when = (key, answer, key2 = false, answer2 = true, andOr = 'and') => {
  // Return actual when function provided by inquirer
  return (promptAnswers) => {
    if (key2) {
      if (andOr === 'and') {
        return promptAnswers[key] === answer && promptAnswers[key2] === answer2
      }
      return promptAnswers[key] === answer || promptAnswers[key2] === answer2
    }
    return promptAnswers[key] === answer
  }
}

module.exports = when
