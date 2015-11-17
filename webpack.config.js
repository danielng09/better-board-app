var path = require('path');

module.exports = {
  entry: {
    app: ['./src/js/index.js']
  },
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: []
};
