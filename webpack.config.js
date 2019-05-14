const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
},
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        use: ["babel-loader","eslint-loader","awesome-typescript-loader"] 
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon:  "./public/favicon.ico"
    })
  ]
};