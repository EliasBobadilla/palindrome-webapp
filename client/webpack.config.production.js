const path = require('path')
const Dotenv = require('dotenv-webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  mode: 'production',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|s?css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new Dotenv({
      API_URL: 'http://localhost:3000' // api url
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'assets', 'index.html')
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        extractComments: true
      })
    ]
  }
}
