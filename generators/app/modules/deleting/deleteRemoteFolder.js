// ===========================
// Remote Folders Clean
// ===========================
const fse = require('fs-extra')
const style = require('./deleteTarget/style.js')
const script = require('./deleteTarget/script.js')

const deleteAction = (data, context) => {
  fse.rmdirSync(context.destinationPath(data.target))
}

const checkCondition = (data, context) => {
  let error = false

  if (data.conditions) {
    for (const cond in data.conditions) {
      if (data.conditions[cond] !== context.props[cond]) {
        error = true
      }
    }
  }

  if (data.orConditions) {
    error = true
    for (const cond of data.orConditions) {
      for (const con in cond) {
        if (cond[con] === context.props[con]) {
          error = false
        }
      }
    }
  }

  if (data.notConditions) {
    for (const cond in data.notConditions) {
      if (data.notConditions[cond] === context.props[cond]) {
        error = true
      }
    }
  }

  if (!error) {
    deleteAction(data, context)
  }
}

const processConfig = (cfg, context) => {
  for (const folder of cfg.folders) {
    checkCondition(folder, context)
  }
}

const deleteRemote = () => {
  return {
    deleting: context => {
      return new Promise((resolve) => {
        // Style
        const styleConfig = style(context)
        processConfig(styleConfig, context)

        // Script
        const scriptConfig = script(context)
        processConfig(scriptConfig, context)

        resolve()
      })
    }
  }
}

module.exports = deleteRemote
