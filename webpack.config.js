const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { babelrc: true },
      },
      {
        test: /\.s?css$/,
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080,
    publicPath: '/dist/',
    inline: true,
    hot: true,
    // hotOnly: true,
  },
  devtool: 'inline-source-map',
  plugins: [new ExtractTextPlugin('index.css'), new webpack.HotModuleReplacementPlugin()],
  resolve: { extensions: ['*', '.js', '.jsx'] },
}
