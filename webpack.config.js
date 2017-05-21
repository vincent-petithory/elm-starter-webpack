const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var IS_DEV = process.env.npm_lifecycle_event !== 'build';
var outputFilename = IS_DEV ? '[name].js' : '[name]-[hash].js';
var elmLoaderOptions = IS_DEV ? {verbose: true, warn: true, debug: true} : {};

let plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
  }),
];

module.exports = {
  entry: {
    index: [
      './src/index.js',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: outputFilename,
  },
  module: {
    rules: [
      {
	test: /\.(css|scss)$/,
	use: [
	  'style-loader',
	  'css-loader',
	]
      },
      {
        test: /\.js$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      },
      {
	test:    /\.elm$/,
	exclude: [/elm-stuff/, /node_modules/],
	use: {
          loader: 'elm-webpack-loader',
          options: elmLoaderOptions
        }
      },
      {
	test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
	test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	loader: 'file-loader',
      }
    ],
    noParse: [/\.elm$/],
  },
  resolve: {
    extensions: [".js", ".elm"]
  },
  plugins,
  devServer: {
    stats: { colors: true },
    port: 8000,
  },
};
