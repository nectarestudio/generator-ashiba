// ===========================
// Package.json Partials
// ===========================
const sortPackageJson = require('sort-package-json')

const addBaseSettings = require('../package/info/base.js')

// Dependencies
const addScriptDependencies = require('../package/dependencies/script.js')

const writePackageJson = () => {
  return {
    writing: (context) => {
      return new Promise((resolve) => {
        // Getting the template files
        let pkg = context.fs.readJSON(context.templatePath('package.json'), {})

        // ============================
        // Apply Data to JSON-String
        // ============================
        addBaseSettings({pkg}, context)

        addScriptDependencies({pkg}, context)

        // Sort package.json data
        pkg = sortPackageJson(pkg)

        // Write package.json
        context.fs.writeJSON(context.destinationPath('package.json'), pkg)

        resolve()
      })
    }
  }
}

module.exports = writePackageJson
