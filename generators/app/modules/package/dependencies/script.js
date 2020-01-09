const extend = require('deep-extend')

function addScriptDependencies(context, files = {}) {
  extend(files.pkg, {
    dependencies: {
      'css-vars-ponyfill': '^1.16.4',
      'intersection-observer': '^0.7.0'
    }
  })

  // Swiper
  if (context.props.installswiper === true) {
    extend(files.pkg, {
      dependencies: {
        swiper: '^5.0.0'
      }
    })
  }

  // Choices
  if (context.props.installchoices === true) {
    extend(files.pkg, {
      dependencies: {
        'choices.js': '^9.0.1'
      }
    })
  }

  // GSAP
  if (context.props.installgsap === true) {
    extend(files.pkg, {
      dependencies: {
        gsap: '^2.1.0'
      }
    })
  }

  // Inview
  if (context.props.installinview === true) {
    extend(files.pkg, {
      dependencies: {
        inview: '^0.0.14'
      }
    })
  }

  // Lada
  if (context.props.installladda === true) {
    extend(files.pkg, {
      dependencies: {
        ladda: '^2.0.1'
      }
    })
  }

  // Smoothscroll
  if (context.props.installsmoothscroll === true) {
    extend(files.pkg, {
      dependencies: {
        'smoothscroll-for-websites': '^1.4.10'
      }
    })
  }

  // Stylelint config
  extend(files.pkg, {
    stylelint: {
      extends: 'stylelint-config-standard',
      rules: {
        'no-empty-source': null,
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: [
              'extend',
              'at-root',
              'debug',
              'warn',
              'error',
              'if',
              'else',
              'for',
              'each',
              'while',
              'mixin',
              'include',
              'content',
              'return',
              'function'
            ]
          }
        ],
        'selector-pseudo-element-colon-notation': null,
        'rule-empty-line-before': null,
        'no-descending-specificity': null
      }
    }
  })
}

module.exports = addScriptDependencies
