const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
    // about: "./src/js/about.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader?interpolate"]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    // new ExtractTextPlugin("styles.css"),
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/*`)
    // }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/views/application.html",
      chunks: ["app"]
    })
    // new HtmlWebpackPlugin({
    //   filename: "about.html",
    //   template: "src/views/about.html",
    //   chunks: ["about"]
    // })
  ]
};
