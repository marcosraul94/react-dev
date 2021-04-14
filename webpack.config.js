const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryPath = path.resolve(__dirname, 'src');
const entry = path.resolve(entryPath, 'index.js');
const outputFilename = 'bundle.js';
const outputPath = path.resolve(__dirname, 'dist');
const htmlTemplateFilename = 'index.html';
const htmlTemplate = path.resolve(entryPath, htmlTemplateFilename);
const nodeModules = path.resolve(__dirname, 'node_modules');

const htmlPlugin = new HtmlWebpackPlugin({
  template: htmlTemplate,
  filename: htmlTemplateFilename,
});

const babel = {
  test: /\.js$/,
  exclude: nodeModules,
  use: ['babel-loader'],
};

module.exports = {
  entry,
  output: {
    path: outputPath,
    filename: outputFilename,
    clean: true,
  },
  module: {
    rules: [babel],
  },
  plugins: [htmlPlugin],
  devServer: {
    contentBase: outputPath,
  },
};
