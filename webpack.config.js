'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    __dirname + '/app/src/app.js'
  ],
  output: {
    path: __dirname + '/public/build',
    filename: 'bundle.js',
  },
  // devtool: 'eval-source-map',  //生成source file
  devServer: {
    hot:true,
    inline: true,
    port: 8080
  },
  module: {

    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1', 'stage-0'],
          ignore:[
            'react.js',
            'react-dom.js',
            'react-redux.js',
            'redux.js',
            'react-router.js'
          ]//该写法忽略转换
        }
      },
			,
			{
				test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
				loader: 'imports?define=>false&this=>window'
			},
			{
				test:/\.less$/,
				loader:'style!css!less'
			}
    ]

  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'node_modules'
    ]
  },

  plugins: [
    // // new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    // //去除重复引用的js
    // new webpack.optimize.DedupePlugin(),
    // //混淆压缩
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false }
    // }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production'),
    //   __SERVER__: false
    // }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jstree: 'jstree'
    // })
  ]
};
