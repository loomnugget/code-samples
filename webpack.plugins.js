import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// import CompressionPlugin from 'compression-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

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

/* The basic is very easy, just define the file name and
 * it's gonna be created in the public folder along with the assets
 */
export const manifest = new ManifestPlugin({
  fileName: 'asset-manifest.json', // Not to confuse with manifest.json
});

export const sw = new SWPrecacheWebpackPlugin({
  // By default, a cache-busting query parameter is appended to requests
  // used to populate the caches, to ensure the responses are fresh.
  // If a URL is already hashed by Webpack, then there is no concern
  // about it being stale, and the cache-busting can be skipped.
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: 'service-worker.js',
  logger(message) {
    if (message.indexOf('Total precache size is') === 0) {
      // This message occurs for every build and is a bit too noisy.
      return;
    }
    console.log(message);
  },
  minify: true, // minify and uglify the script
  navigateFallback: '/index.html',
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
});

export const copy = new CopyWebpackPlugin([
  { from: 'src/pwa' }, // define the path of the files to be copied
]);
