import webpack from 'webpack';
import os from 'os';
import path from 'path';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
  'process.env.DEV_HOSTNAME': JSON.stringify(os.hostname()),
  __DEV__: true
};

export default {
  // cache: true,
  mode: 'development',
  devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [
    // must be first entry to properly set public path
    './src/webpack-public-path',
    'whatwg-fetch',
    'webpack-hot-middleware/client?reload=false',
    './src/index',
    'babel-polyfill'
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: `${__dirname}/devDist`, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/', // Use absolute paths to avoid the way that URLs are resolved by Chrome when they're parsed from a dynamically loaded CSS blob. Note: Only necessary in Dev.
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      // threshold: 10240,
      // minRatio: 0.8
    }),
    // new CompressionPlugin(),
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
        // query: {cacheDirectory: true} // NOTE: deprecated - replace?
      },
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, include: path.join(__dirname, 'src/assets'), loader: 'file-loader'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, include: path.join(__dirname, 'src/assets'), loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, include: path.join(__dirname, 'src/assets'), loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, include: path.join(__dirname, 'src/assets'), loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},

      { // Localized Component CSS/SCSS
        test: /(\.css|\.scss)$/,
        include: [/components/],
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=2&camelCase&sourceMap&localIdentName=[name]__[local]__[hash:base64:5]',
          'sass-loader?precision=10&sourceMap',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(__dirname, 'src/assets/stylesheets/_variables.scss')
            }
          }
        ]
      },
      { // Global SCSS
        test: /(\.css|\.scss)$/,
        include: [/assets[\/\\]stylesheets/],
        use: [
          'style-loader',
          'css-loader?importLoaders=1&sourceMap',
          'sass-loader?precision=10&sourceMap',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(__dirname, 'src/assets/stylesheets/_variables.scss')
            }
          }
        ]
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     { loader: 'sass-loader' },
      //     {
      //       loader: 'sass-resources-loader',
      //       options: {
      //         resources: path.join(__dirname, 'src/assets/stylesheets/_variables.scss')
      //       }
      //     }
      //   ]
      // }
    ]
  }
};
