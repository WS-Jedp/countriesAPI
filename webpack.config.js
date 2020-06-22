const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module:{
    rules:[
      {
        test: /\.js?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader', 
            options: { 
              url: false, 
              sourceMap: true,
              importLoaders: 1, 
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              } 
            } 
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          }
        ],
        include: /\.module\.css/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: 'index.html'
      }
    ),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].css',
      chunkFilename: 'assets/styles/[id].css'
    })
  ]
}