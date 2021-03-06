var config = require("./webpack.config.js");
var webpack = require("webpack");
var webpackDevServer=require("webpack-dev-server");

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  contentBase: "dist",
  hot: true,
  inline: true,
  historyApiFallback: true,
  proxy: {
    '/api/**': {
      target: 'http://localhost:4000',
      crossOrigin: true,
      // port: "8080",
      secure: false
    },
  }
});


server.listen(3332);
