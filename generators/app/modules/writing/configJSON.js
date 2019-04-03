// ===========================
// Package.json Partials
// ===========================
const writeConfigJson = () => {
  return {
    writing: (context) => {
      return new Promise((resolve) => {
        // Getting the template files
        let pkg = context.fs.readJSON(context.templatePath('config.json'), {})

        // Write package.json
        context.fs.writeJSON(context.destinationPath('config.json'), pkg)

        resolve()
      })
    }
  }
}

module.exports = writeConfigJson
