const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'), // source directory
  entry: './main.js',
  output: {
    path: './build', // output directory
    filename: 'build-[hash:4].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel?presets[]=es2015', exclude: /node_modules/ },
			{ test: /\.html$/, loader: 'html?conservativeCollapse' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
			{ test: /\.(png|jpe?g|.gif)$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.(woff2?|ttf|eot|svg)(.*)?$/, loader: 'file?name=fonts/[name].[ext]' },
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('styles-[hash:4].css'),
    new HtmlWebpackPlugin({
      template: './app.html',
      inject: 'body'
    }),
    // new webpack.DefinePlugin({
    //   API: JSON.stringify('http://localhost:3000')
    // })
  ]
};
