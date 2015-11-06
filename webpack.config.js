var path = require('path');

module.exports = {
  entry: {
    app: ['./src/js/index.js']
  },
  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
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
