import webpack from 'webpack';
// import os from 'os';
import path from 'path';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglify-js-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// const GLOBALS = {
//   'process.env.NODE_ENV': JSON.stringify('development'),
// Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
//   'process.env.DEV_HOSTNAME': JSON.stringify(os.hostname()),
//   __DEV__: true
// };
// new webpack.DefinePlugin(GLOBALS),

export default {
  // cache: true,
  mode: 'production',
  devtool: 'eval-source-map',
  // entry: [
  //   // must be first entry to properly set public path
  //   './src/webpack-public-path',
  //   'whatwg-fetch',
  //   'webpack-hot-middleware/client?reload=false',
  //   './src/index',
  //   'babel-polyfill'
  // ],
  entry: [
    './src/webpack-public-path',
    './src/index',
    // vendor: ['react', 'redux'],
    // app: './entry'
  ],
  target: 'web', // the environment in which the bundle should run
  output: {
    path: `${__dirname}/devDist`, // Note: Physical files are only output by the production build task `npm run build`.
    filename: '[name].[contenthash].js',
    publicPath: '/',
    // filename: 'bundle.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          // test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: 'src/index.ejs',
      filename: 'index.html'
    }),
    // new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
    //   template: 'src/index.ejs',
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true
    //   },
    //   inject: true
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.join(__dirname, 'src/assets'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      // {
      //   test: /\.eot(\?v=\d+.\d+.\d+)?$/,
      //   include: path.join(__dirname, 'src/assets'),
      //   loader: 'file-loader'
      // },
      // {
      //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   include: path.join(__dirname, 'src/assets'),
      //   loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      // },
      // {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, include: path.join(__dirname, 'src/assets'), loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      // {test: /\.svg(\?v=\d+.\d+.\d+)?$/, include: path.join(__dirname, 'src/assets'), loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},

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
    ]
  }
};
