const extend = require('deep-extend')

function addScriptDependencies(files = {}, context) {
  extend(files.pkg, {
    dependencies: {
      'css-vars-ponyfill': '^1.16.4'
    }
  })

  // Swiper
  if (context.props.installswiper === true) {
    extend(files.pkg, {
      dependencies: {
        swiper: '^4.5.0'
      }
    })
  }

  // Select2
  if (context.props.installselect2 === true) {
    extend(files.pkg, {
      dependencies: {
        select2: '^4.0.6-rc.1'
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
        'locomotive-scroll': '^3.1.7'
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
