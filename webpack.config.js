var path = require('path');
var webpack = require('webpack');

var config = {
  cache: true,
  devtool: 'source-map',
  entry: {
    polyfills: './src/polyfills',
    vendor:    './src/vendor',
    main:      './src/main',
    en: './src/app/lang/en.json',
    ru: './src/app/lang/ru.json'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'awesome-typescript-loader' },
      { test: /\.json$/, loader: 'file-loader?name=[name].json' },
      { test: /\.html/,  loader: 'raw-loader' },
      { test: /\.css$/,  loader: 'to-string-loader!css-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['polyfills', 'vendor', 'main', 'en', 'ru'].reverse(), minChunks: Infinity })
  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};
module.exports = config;
