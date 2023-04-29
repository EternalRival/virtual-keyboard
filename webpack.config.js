const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  output: { filename: 'main.js', clean: true },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html', favicon: 'src/assets/favicon.ico' }),
  ],
  module: {
    rules: [
      { test: /\.scss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.(ogg|webm)$/i, type: 'asset' },
    ],
  },
};
