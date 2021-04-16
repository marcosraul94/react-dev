const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// paths and file names
const entryPath = path.resolve(__dirname, 'src');
const entry = path.resolve(entryPath, 'index.js');
const outputFilename = 'bundle.js';
const outputPath = path.resolve(__dirname, 'dist');
const htmlTemplateFilename = 'index.html';
const htmlTemplate = path.resolve(entryPath, htmlTemplateFilename);
const nodeModules = path.resolve(__dirname, 'node_modules');

// plugins
const htmlPlugin = new HtmlWebpackPlugin({
  template: htmlTemplate,
  filename: htmlTemplateFilename,
});

// loaders
const babelLoader = {
  test: /\.(js|jsx)$/,
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
    rules: [babelLoader],
  },
  resolve: {
    alias: {
      src: entryPath,
    },
  },
  plugins: [htmlPlugin],
  devServer: {
    contentBase: outputPath,
    port: 4200,
  },
};
