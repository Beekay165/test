// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pug = {
  test: /\.pug$/,
  use: ["html-loader?attrs=false", "pug-html-loader"]
};
const config = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [pug]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/views/index.pug",
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/views/about.pug",
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "services.html",
      template: "src/views/services.pug",
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "events.html",
      template: "src/views/events.pug",
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "src/views/contact.pug",
      inject: false
    })
  ]
};
module.exports = config;
