/* eslint-disable linebreak-style */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, 'src', 'index.js') },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
  },
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
  ],
};