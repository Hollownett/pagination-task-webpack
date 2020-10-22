const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const config = require('./webpack.config.js')

module.exports = merge(config, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: 'all',
        test: /\.(js|jsx)(\?.*)?$/i,
      }),
    ],
  },
})