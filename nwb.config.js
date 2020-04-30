const path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'demo', 'public')
  },
  webpack: {
    config(config) {
      config.module.rules[0].test = /\.jsx?$/
      config.resolve = {
        extensions: ['.js', '.jsx', '.json', '.css']
      }
      return config
    }
  }
}
