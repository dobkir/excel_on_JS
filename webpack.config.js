/* eslint-disable indent */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  }];

  if (isDev) {
    loaders.push('eslint-loader'); // в режиме разработки добавляется eslint-loader для js
  }

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new CopyPlugin({
      patterns: [
        // { from: "source", to: "dest" },
        // { from: "other", to: "public" },
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [{
      test: /\.html$/i,
      loader: 'html-loader',
    },
    {
      test: /\.css$/i,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: isDev, // hot modal reloader
        },
      },
        'css-loader',
      ],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: jsLoaders(),
    },
    ],
  },
  target: 'web',
};
