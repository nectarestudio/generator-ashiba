const chalk = require('chalk')

const message = ({
  headline = 'Headline',
  description = 'description'
}) => {
  return `${chalk.cyan.underline.bold(`${headline}`)}\n\xa0  ${description}`
}

module.exports = message
