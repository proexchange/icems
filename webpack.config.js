const path = require('path');

module.exports = {
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'icems.js',
    library: 'ICEMS',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  }
};
