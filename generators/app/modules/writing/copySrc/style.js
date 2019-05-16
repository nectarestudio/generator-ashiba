const styles = function() {
  return {
    files: [
      {
        src: 'src/scaffolding/styles/main.scss',
        dest: 'resources/assets/styles/main.scss'
      },
      {
        src: 'src/scaffolding/styles/_variables.scss',
        dest: 'resources/assets/styles/_variables.scss'
      },
      {
        conditions: {
          copybuttons: true
        },
        src: 'src/scaffolding/styles/conditionals/_buttons.scss',
        dest: 'resources/assets/styles/components/_buttons.scss'
      },
      {
        conditions: {
          copymaterialforms: true
        },
        src: 'src/scaffolding/styles/conditionals/_checkbox.scss',
        dest: 'resources/assets/styles/components/_checkbox.scss'
      },
      {
        conditions: {
          copymaterialforms: true
        },
        src: 'src/scaffolding/styles/conditionals/_forms.scss',
        dest: 'resources/assets/styles/components/_forms.scss'
      },
      {
        conditions: {
          copymaterialforms: true
        },
        src: 'src/scaffolding/styles/conditionals/_input.scss',
        dest: 'resources/assets/styles/components/_input.scss'
      },
      {
        conditions: {
          copymaterialforms: true
        },
        src: 'src/scaffolding/styles/conditionals/_select.scss',
        dest: 'resources/assets/styles/components/_select.scss'
      }
    ],
    folders: [
      {
        src: 'src/scaffolding/styles/pack',
        dest: 'resources/assets/styles/'
      },
      {
        src: 'src/scaffolding/fonts',
        dest: 'resources/assets/fonts'
      }
    ]
  }
}

module.exports = styles
