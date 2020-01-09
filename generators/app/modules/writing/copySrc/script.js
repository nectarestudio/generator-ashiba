const script = function() {
  return {
    files: [
      {
        conditions: {
          installswiper: true
        },
        src: 'src/scaffolding/scripts/conditionals/swiper-init.js',
        dest: 'resources/assets/scripts/common/swiper-init.js'
      },
      {
        conditions: {
          installinview: true
        },
        src: 'src/scaffolding/scripts/conditionals/in-viewport.js',
        dest: 'resources/assets/scripts/common/in-viewport.js'
      },
      {
        conditions: {
          installchoices: true
        },
        src: 'src/scaffolding/scripts/conditionals/select-control.js',
        dest: 'resources/assets/scripts/common/controllers/select-control.js'
      }
    ],
    folders: [
      {
        src: 'src/scaffolding/scripts/pack',
        dest: 'resources/assets/scripts'
      }
    ]
  }
}

module.exports = script
