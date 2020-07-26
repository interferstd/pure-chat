const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './client/entry.ts',
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      title: "Pure Chat",
      template: "./client/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};