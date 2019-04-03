const script = context => {
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
