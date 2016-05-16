var webpack = require('webpack');
var path = require('path');
var WebpackMd5Hash = require('webpack-md5-hash');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var node_modules_dir = path.resolve(__dirname, 'node_modules');

/* 
 * 用于分析模块的共用代码
 * https://github.com/webpack/docs/wiki/optimization#multi-page-app
 */

var source = {
  entryAppJS: './src/app.js',
  entryMobileJS: './src/mobile.js'
}
var build = {
  dir: 'dist',
  HTML1: {
    filename: 'index.html',
    title: 'react-redux-stator-kit',
    template: 'index.ejs'
  },
  HTML2: {
    filename: 'mobile.html',
    title: 'react-redux-stator-kit',
    template: 'mobile.ejs'
  }
}

var isProduction = function () {
  console.log(process.env.NODE_ENV);
  return process.env.NODE_ENV === 'production';
}

var plugins = [
  new webpack.BannerPlugin('This file is created by fooying@qq.com'),
  new webpack.HotModuleReplacementPlugin(),
  new WebpackMd5Hash(),
  new ExtractTextPlugin("[name].css"), //合并css
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    filename: 'vendors.js',
    minChunks: Infinity
  }), //用于分析模块的共用代码
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: build.HTML1.filename,
    title: build.HTML1.title,
    template: build.HTML1.template,
    chunks: ['vendors', 'app']
  }),
  new HtmlWebpackPlugin({
    filename: build.HTML2.filename,
    title: build.HTML2.title,
    template: build.HTML2.template,
    chunks: ['vendors', 'mobile']
  })
];

var entryApp = [
    path.resolve(__dirname, source.entryAppJS)
  ];
var entryMobile = [
    path.resolve(__dirname, source.entryMobileJS)
  ];

if( isProduction() ) {
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      mangle: {
          except: ['exports', 'require']
      },
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      },
    })
  );
} else {
  entryApp.push(
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3003'
  );
  entryMobile.push(
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3003'
  );
}


var config = {
  entry: {
    app: entryApp,
    mobile: entryMobile,
    vendors: [
      'react',
      'react-router',
      'react-router-redux',
      'react-redux',
      './src/common/js/Tools']
  },
  output: {
    path: path.resolve(__dirname, build.dir),
    publicPath: '/', // 自动添加 css js 文件绝对路径 
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        query:{
          "presets": [
            "es2015",
            "stage-0",
            "react"
          ],
          "plugins": [
            "transform-decorators-legacy",
            "transform-object-rest-spread",
            "antd"
          ]
        },
        exclude: [node_modules_dir]
      },{
        test: /\.(less|css)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!less')
        // ?importLoaders=1!autoprefixer
        // importLoaders=1 解决autoprefixer css less 中存在的bug
      },
      {
        test: /\.(jpg|png|gif|ico)$/,
        loader: 'url?limit=8192'
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: 'file'
      }
    ]
  },
  resolve:{
    extensions:['','.js','.jsx'] // 可以忽略的后缀名
  },
  plugins: plugins,
  devtool: isProduction() ? null : 'source-map'
}

module.exports = config;
