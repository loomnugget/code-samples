import webpack from 'webpack';
import * as plugins from './webpack.plugins';
import * as loaders from './webpack.loaders';
import UglifyJsPlugin from 'uglify-js-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
// https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
// Types of splitting with webpack
// 1. Bundle Splitting - create more, smaller files (but load them all on each network request anyways) for better caching
// split one large file into 2 files so the user only needs to download the file that changed
// and the browser serves the other file from the cache
// this makes no difference to first time users since this relies on caching
// 2. Code Splitting - dynamically load code so users only load code they need for that part of the site

const commonConfig = {
  entry: [
    './src/webpack-public-path',
    './src/index'
  ],
  target: 'web', // the environment in which the bundle should run
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js', // contenthash allows us to update cache as packages/files are updated
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

const devConfig = merge(
  commonConfig,
  { mode: 'development' },
  { devtool: 'eval-source-map' },
  loaders.devServer({
    host: process.env.host,
    port: process.env.port,
  })
)

const productionConfig = merge(
  commonConfig,
  { mode: 'production' },
  { devtool: 'source-map' },
  {
    plugins: [
      plugins.manifest,
      plugins.environmentVariables,
      plugins.loaderOptions,
      plugins.manifest, // Add the manifest plugin
      plugins.sw, // Add the sw-precache-webpack-plugin
      plugins.copy
    ]
  },
  {
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
      },
      minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        })
      ]
    }
  }
);

const finalConfig = process.env.NODE_ENV === 'production' ? productionConfig : devConfig;

export default productionConfig;
