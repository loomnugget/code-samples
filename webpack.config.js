import webpack from 'webpack';
// import os from 'os';
import path from 'path';
// import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import UglifyJsPlugin from 'uglify-js-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// const GLOBALS = {
//   'process.env.NODE_ENV': JSON.stringify('development'),
// Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
//   'process.env.DEV_HOSTNAME': JSON.stringify(os.hostname()),
//   __DEV__: true
// };
// new webpack.DefinePlugin(GLOBALS),

// Types of performance
// 1. First time users -
// 2. Frequent users

// Types of splitting with webpack
// 1. Bundle Splitting - create more, smaller files (but load them all on each network request anyways) for better caching
// split one large file into 2 files so the user only needs to download the file that changed
// and the browser serves the other file from the cache
// NOTE: this makes no difference to first time users since this relies on caching
// 2. Code Splitting - dynamically load code so users only load code they need for that part of the site
// const testPlugins = [
//   new webpack.NamedModulesPlugin(),
//   new webpack.HotModuleReplacementPlugin(),
//   new webpack.NoEmitOnErrorsPlugin(),
//   new BundleAnalyzerPlugin(),
//   new CleanWebpackPlugin(['dist']),
//   new HtmlWebpackPlugin({
//     title: 'Caching',
//     template: 'src/index.ejs',
//     filename: 'index.html'
//   }),
//   new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
//     template: 'src/index.ejs',
//     minify: {
//       removeComments: true,
//       collapseWhitespace: true
//     },
//     inject: true
//   })
// ];
//
// const productionConfig = merge([{
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         commons: {
//           test: /[\\/]node_modules[\\/]/,
//           name: 'vendor',
//           chunks: 'initial' // Initial = chunks that count towards the initial loading time
//         },
//       },
//     },
//   }
// }]);

export default {
  // mode: 'production',
  devtool: 'eval-source-map',
  entry: [
    './src/webpack-public-path',
    './src/index'
  ],
  target: 'web', // the environment in which the bundle should run
  output: {
    path: path.resolve(__dirname, 'build'),
  //  path: `${__dirname}/build`, // Note: Physical files are only output by the production build task `npm run build`.
    filename: '[name].[contenthash].js', // contenthash allows us to update cache as packages/files are updated
    publicPath: '/', // needed since we are using sourceMap style-loader
  },
  plugins: [
    new CleanWebpackPlugin('build'),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: true
    }),
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0, // Webpack's default min file size is 30KB and a max 3 files when splitting output files
      // cacheGroups: where we define rules for how Webpack should group chunks into output files
      cacheGroups: {
        vendor: { // vendor = any module loaded from node_modules
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.j or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        }
      }
    }
  },
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
