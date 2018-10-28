import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import UglifyJsPlugin from 'uglify-js-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import CompressionPlugin from 'compression-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// HtmlWebpackPlugin generates an HTML file that includes all webpack
// bundles in the script tags
export const html = new HtmlWebpackPlugin({
  title: 'Test App',
  template: 'src/index.html',
  // favicon: '',
  meta: {
    'charset': 'utf-8',
    'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no', // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    'theme-color': '#ffffff', // Will generate: <meta name="theme-color" content="#4285f4">
    'author': 'Claudia Cedfeldt'
  },
  inject: true // inject all assets into <head></head>
});

export const clean = new CleanWebpackPlugin('build');

 // so that file hashes don't change unexpectedly
export const hashedModules = new webpack.HashedModuleIdsPlugin();

// Webpack 4 autmatically configures UglifyJsPlugin so no need to do this
// we specify a custom UglifyJsPlugin here to get source maps in production
export const uglify = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  uglifyOptions: {
    compress: false,
    ecma: 6,
    mangle: true
  },
  sourceMap: true
});

export const loaderOptions = new webpack.LoaderOptionsPlugin({
  options: {
    context: __dirname,
  },
});

export const environmentVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});

// export const extractText = (() => {
//   const config = {
//     filename:  'style.css',
//   };
//   return new ExtractTextPlugin(config);
// })();

// This file will be created in the public folder along with the assets
// @hen deploying to a server and bundle for production the /public folder will contain our asset-manifest.json.
export const manifest = new ManifestPlugin({
  fileName: 'asset-manifest.json', // Not to confuse with manifest.json
});

// By default, a cache-busting query parameter is appended to requests
// used to populate the caches, to ensure the responses are fresh.
// If a URL is already hashed by Webpack, then there is no concern
// about it being stale, and the cache-busting can be skipped.
export const serviceWorker = new SWPrecacheWebpackPlugin({
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: 'service-worker.js',
  logger(message) {
    // This message occurs for every build and is a bit too noisy.
    if (message.indexOf('Total precache size is') === 0) return;
    console.log(message);
  },
  minify: true, // minify and uglify the script
  navigateFallback: '/index.html',
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
});

export const copy = new CopyWebpackPlugin([
  { from: 'src/pwa' }, // define the path of the files to be copied
]);
