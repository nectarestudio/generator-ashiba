const chalk = require('chalk')
const message = require('../helpers/message')

const generalPrompts = context => {
  return [
    {
      type: 'input',
      name: 'projectname',
      message: message({
        headline: 'Project Name',
        description: 'Please give the project a name (without Spaces)',
        defaultValue: false
      }),
      default() {
        return process
          .cwd()
          .replace('\\', '/')
          .split('/')
          .pop(-1)
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]/g, '')
      },
      validate(input) {
        // Do async stuff
        if (input.indexOf(' ') >= 0 ||/[~`!#$%^&*+=[\]\\';,/{}|\\":<>?]/g.test(input)) {
          // Pass the return value in the done callback
          return chalk`{red No whitespaces or special-chars allowed!}`
        }
        return true
      },
      store: false
    },
    {
      type: 'input',
      name: 'projectversion',
      message: message({
        headline: 'Project Version',
        description: 'Version Number:',
        defaultValue: false
      }),
      default: '0.0.1',
      store: true
    },
    {
      type: 'list',
      name: 'installswiper',
      message: message({
        headline: 'Install dependency: Swiper',
        description: 'Install npm package swiper?',
        defaultValue: false
      }),
      choices: [
        {
          name: 'Yes',
          value: true
        },
        {
          name: 'No',
          value: false
        }
      ],
      store: true
    },
    {
      type: 'list',
      name: 'installselect2',
      message: message({
        headline: 'Install dependency: Select2',
        description: 'Install npm package select2?',
        defaultValue: false
      }),
      choices: [
        {
          name: 'Yes',
          value: true
        },
        {
          name: 'No',
          value: false
        }
      ],
      store: true
    },
    {
      type: 'list',
      name: 'installgsap',
      message: message({
        headline: 'Install dependency: GSAP',
        description: 'Install npm package gsap?',
        defaultValue: false
      }),
      choices: [
        {
          name: 'Yes',
          value: true
        },
        {
          name: 'No',
          value: false
        }
      ],
      store: true
    },
    {
      type: 'list',
      name: 'installinview',
      message: message({
        headline: 'Install dependency: Inview',
        description: 'Install npm package inview?',
        defaultValue: false
      }),
      choices: [
        {
          name: 'Yes',
          value: true
        },
        {
          name: 'No',
          value: false
        }
      ],
      store: true
    },
    {
      type: 'list',
      name: 'installsmoothscroll',
      message: message({
        headline: 'Install dependency: Smoothscroll',
        description: 'Install npm package smoothscroll-for-websites?',
        defaultValue: false
      }),
      choices: [
        {
          name: 'Yes',
          value: true
        },
        {
          name: 'No',
          value: false
        }
      ],
      store: true
    },
    {
      type: 'list',
      name: 'installladda',
      message: message({
        headline: 'Install dependency: Ladda',
        description: 'Install npm package ladda?',
        defaultValue: false
      }),
      choices: [
        {
          name: 'Yes',
          value: true
        },
        {
          name: 'No',
          value: false
        }
      ],
      store: true
    },
    {
      type: 'list',
      name: 'copymaterialforms',
      message: message({
        headline: 'copy material forms',
        description: 'Copy material forms styles?',
        defaultValue: false
      }),
      choices: [
        {
          name: 'Yes',
          value: true
        },
        {
          name: 'No',
          value: false
        }
      ],
      store: true
    },
    {
      type: 'list',
      name: 'copybuttons',
      message: message({
        headline: 'copy buttons',
        description: 'Copy button styles template?',
        defaultValue: false
      }),
      choices: [
        {
          name: 'Yes',
          value: true
        },
        {
          name: 'No',
          value: false
        }
      ],
      store: true
    }
  ]
}

module.exports = generalPrompts
