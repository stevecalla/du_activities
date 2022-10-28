const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Require the GenerateSW class of the WorkBoxPlugin 
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin',
    }),
    new MiniCssExtractPlugin(),
    // TODO: Add parameters to GenerateSW class to configure runtime caching
    new WorkboxPlugin.GenerateSW({
      // Exclude images from the precache
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
    
      // Define runtime caching rules.
      runtimeCaching: [{
        // Match any request ends with .png, .jpg, .jpeg or .svg or .gif.
        urlPattern: /\.(?:png|svg|jpg|jpeg|gif)$/,
        handler: 'NetworkFirst',
    
        options: {
          // Use a custom cache name.
          cacheName: 'images',
    
          // Only cache 2 images.
          expiration: {
            maxEntries: 2,
          },
        },
      }],
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
