const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 3030,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
})