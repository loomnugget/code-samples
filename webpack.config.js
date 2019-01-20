import * as plugins from './webpack.plugins';
import * as loaders from './webpack.loaders';
import merge from 'webpack-merge';
import path from 'path';

const commonConfig = {
  entry: [
    'webpack-hot-middleware/client',
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
    plugins.clean,
    plugins.html,
    plugins.hashedModules
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules.(?!ol))/,
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
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        include: path.join(__dirname, 'src/assets'),
        loader: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.join(__dirname, 'src/assets'),
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        include: path.join(__dirname, 'src/assets'),
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        include: path.join(__dirname, 'src/assets'),
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
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
        include: [/assets[\\]stylesheets/],
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
);

const productionConfig = merge(
  commonConfig,
  { mode: 'production' },
  { devtool: 'source-map' },
  {
    plugins: [
      plugins.environmentVariables,
      plugins.loaderOptions,
      plugins.manifest,
      plugins.serviceWorker,
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
      // minimizer: [
      //   plugins.uglify
      // ]
    }
  }
);

const webpackConfig = process.env.NODE_ENV === 'production' ? productionConfig : devConfig;

export default webpackConfig;
