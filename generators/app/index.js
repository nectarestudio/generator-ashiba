/* eslint-disable prettier/prettier */
'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const clear = require('clear-terminal')
const commandExists = require('command-exists')
const gradient = require('gradient-string')

// Importing modules
const promptsFunction = require('./modules/prompt')
const pkg = require('../../package.json')

// Package JSON
const writePackageJson = require('./modules/writing/packageJSON')

// Config JSON
const writeConfigJson = require('./modules/writing/configJSON')

// Copy Source Files
const copySources = require('./modules/writing/copySources')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.pkg = pkg

    this.devMode = opts.dev ? opts.dev : false

    this.promptsFunction = promptsFunction.bind(this)

    // Package.json
    this.writePackageJson = writePackageJson.bind(this)

    // Config.json
    this.writeConfigJson = writeConfigJson.bind(this)

    // Copy Sources
    this.copySources = copySources.bind(this)

    // Command Checks
    this.commands = {
      composer: false,
      yarn: false,
      git: false,
      wget: false,
      wp: false,
      mysql: false
    }
  }

  // Initializing
  async initializing () {
    await Promise.all(
      Object.keys(this.commands).map(command => {
        return commandExists(command)
          .then(commandResult => {
            this.commands[commandResult] = true
          })
          .catch(error => {})
      })
    )
  }

  prompting() {
  
    // Welcome Message
    var logo = gradient.retro(`
                                      dP       oo dP                                 
                                      88          88                                 
                    .d8888b. .d8888b. 88d888b. dP 88d888b. .d8888b.                  
                    88'  '88 Y8ooooo. 88'  '88 88 88'  '88 88'  '88                  
                    88.  .88       88 88    88 88 88.  .88 88.  .88                  
                    '88888P8 '88888P' dP    dP dP 88Y8888' '88888P8`)

    var version = chalk`
                                                             {white.bold.bgCyan v${ this.pkg.version }}`
    var nectar = gradient.cristal(`         
                    ,-. ,-. ,-. |- ,-. ,-.  ,-. ,-. |- . . ,-| . ,-. 
                    | | |-' |   |  ,-| |    |-' \`-. |  | | | | | | | 
                    ' ' \`-' \`-' \`' \`-^ '    \`-' \`-' \`' \`-^ \`-^ ' \`-'`)

    // Custom Greeting
    var greeting = chalk`
                    {hex('#c9c9c9') -------------- {hex('#00ffd8') scaffolding system} --------------}
                    {bold URL:} {hex('#00ffd8') https://github.com/nectarestudio/ashiba}
    `

    // Have Yeoman greet the user.
    if (process.env.NODE_ENV !== 'test') {
      clear()
    }
  
    this.log(logo)
    this.log(version)
    this.log(nectar)
    this.log(greeting)

    // Now ask some questions already
    const prompts = promptsFunction(this)
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
      this.props.fileGroup = this.props.fileGroup || false
      this.props.fileUser = this.props.fileUser || false
    })
  }

  async writing() {
    this.log(`${chalk.magenta('Installing Ashiba')}`)
    // Write Package.json
    this.log(`${chalk.magenta('Writing package.json')}`)
    this.writePackageJson().writing(this)

    // Write config.json
    this.log(`${chalk.magenta('Configuring package.json')}`)
    this.writeConfigJson().writing(this)

    // Copy Source Files and Folders
    this.log(`${chalk.magenta('Copying template sources')}`)
    this.copySources().writing(this)
  }

  install() {
    if (!this.devMode) {
      if (this.commands.yarn) {
        this.yarnInstall()
      } else {
        this.npmInstall()
      }
    }
  }

  end () {
    if (process.env.NODE_ENV !== 'test') {
      clear()
    }
    var footerMessage = gradient.retro(`
                                    dP       oo dP                                 
                                    88          88                                 
                  .d8888b. .d8888b. 88d888b. dP 88d888b. .d8888b.                  
                  88'  '88 Y8ooooo. 88'  '88 88 88'  '88 88'  '88                  
                  88.  .88       88 88    88 88 88.  .88 88.  .88                  
                  '88888P8 '88888P' dP    dP dP 88Y8888' '88888P8               
  `)
    var goodbye = chalk`                   {hex('#00ffd8') The Generator is finished.}
    `
    goodbye += '\n'

    goodbye += chalk`                   {hex('#94ff00').bold Happy Coding.}`

    this.log(footerMessage)
    this.log(goodbye)
  }
};
