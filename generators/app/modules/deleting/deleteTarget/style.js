const styles = function() {
  return {
    files: [
      {
        target: 'resources/assets/styles/common/_global.scss'
      },
      {
        target: 'resources/assets/styles/common/_variables.scss'
      },
      {
        target: 'resources/assets/styles/components/_comments.scss'
      },
      {
        target: 'resources/assets/styles/layouts/_pages.scss'
      },
      {
        target: 'resources/assets/styles/layouts/_posts.scss'
      },
      {
        target: 'resources/assets/styles/layouts/_sidebar.scss'
      }
    ],
    folders: [
      {
        target: 'resources/assets/styles/autoload'
      },
      {
        target: 'resources/assets/styles/common'
      }
    ]
  }
}

module.exports = styles
