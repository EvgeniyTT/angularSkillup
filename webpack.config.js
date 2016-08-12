const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const config
module.exports = {
  context: path.join(__dirname, 'src'), // исходная директория
  entry: {
    app: ['main/main.js']  // файл для сборки
  },
  output: {
    path: path.join(__dirname, 'build'), // выходная директория
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel?presets[]=es2015', exclude: /node_modules/ },
			{ test: /\.html$/, loader: 'html?conservativeCollapse' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
			{ test: /\.(png|jpe?g|.gif)$/, loader: 'file?name=[path][name].[ext]' },
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './main/app.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API: JSON.stringify('http://localhost:3000')
    })
  ]
};

// const compiler = webpack(config);
// compiler.run(function logger(err, stats) {
//   console.log(stats.toJson()); // по завершению, выводим всю статистику
// });
