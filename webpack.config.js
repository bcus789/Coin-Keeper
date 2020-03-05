const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/, //question mark makes scss optional for cs reset compatibility
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map", //allows us to find the actual component where the error is occuring as opposed to sending us to webpacks bundle.js. In general source maps make debugging so so much better.
  devServer: {
    contentBase: path.join(__dirname, "public") //this allows dev server to know where the public server is by conecting the root directory to the public folder
  }
};
