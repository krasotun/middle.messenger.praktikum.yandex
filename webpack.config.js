const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      fs: false,
    },
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js'
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      { test: /\.(png|ico|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/, type: 'asset/resource' },
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new miniCss({
      filename: 'style.css',
    }),
  ]
}

