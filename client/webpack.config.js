const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|s?css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.mdx$/,
        use: ['babel-loader', '@mdx-js/loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html',
      filename: './index.html'
    }),
    new Dotenv()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../assets'),
    compress: true,
    port: 3005
  }
}
