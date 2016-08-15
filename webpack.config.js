const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const config
module.exports = {
  context: path.resolve(__dirname, 'src'), // исходная директория
  entry: './main.js',
  output: {
    path: './build', // выходная директория
    filename: 'build.js'
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
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    new ExtractTextPlugin("styles.css")
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   inject: 'body'
    // }),
    // new webpack.DefinePlugin({
    //   API: JSON.stringify('http://localhost:3000')
    // })
  ]
};

// const compiler = webpack(config);
// compiler.run(function logger(err, stats) {
//   console.log(stats.toJson()); // по завершению, выводим всю статистику
// });
