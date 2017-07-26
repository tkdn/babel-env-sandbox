const path = require('path')
const pkg = require('./package')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Es3ifyPlugin = require('es3ify-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')

const PRODUCTION = process.env.NODE_ENV === 'production'
const BABEL_ENV = process.env.BABEL_ENV
const SHIM_FLAG = BABEL_ENV === 'android2' ? true : false
const BABILI_FLAG = BABEL_ENV === 'chrome' || BABEL_ENV === 'ios9'

const webpackConfig = {
  devtool: PRODUCTION ? false : 'inline-source-map',
  entry: {
    [`docs/${BABEL_ENV}/assets/bundle`]: './src/scripts/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.ejs',
      filename: `docs/${BABEL_ENV}/index.html`,
      inject: false,
      target: BABEL_ENV,
      shim: SHIM_FLAG,
      url: pkg.repository.url
    }),
    new webpack.DefinePlugin({
      'BABEL_ENV': JSON.stringify(process.env.BABEL_ENV)
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_module')
        ]
      },
    ]
  },
}

if (PRODUCTION && !BABILI_FLAG) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true })
  )
}
// uglify ES2015~ 
if (PRODUCTION && BABILI_FLAG) {
  webpackConfig.plugins.push(
    new BabiliPlugin()
  )
}
if (SHIM_FLAG) {
  webpackConfig.plugins.push(
    new Es3ifyPlugin()
  )
}

module.exports = webpackConfig
