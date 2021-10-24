const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/dist'),

  devServer: {
    proxy: {
      '^/api' : {
        target: 'http://localhost:4000/'
      },
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/'),
        "#": path.resolve(__dirname, 'frontend/')
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
