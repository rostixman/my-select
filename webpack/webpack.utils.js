const { PATHS, ENV, NODE_ENV, BUILD_TARGET, SERVER } = require('./webpack.consts');

const helpers = {
  entry: () => PATHS.entry,
  output: () => ({
    filename: ENV.isProduction ? '[name].[hash].js' : '[name].js',
    path: PATHS.dist,
    publicPath: PATHS.pub,
  }),
  mode: () => (ENV.isProduction ? 'production' : 'development'),
  resolve: () => ({
    extensions: ['.js', '.jsx'],
    modules: [PATHS.root, PATHS.src, PATHS.app, 'node_modules'],
  }),
  sourceMap: () => (ENV.isProduction ? false : 'inline-source-map'),
  server: () => ({
    contentBase: PATHS.dist,
    port: SERVER.port,
    host: SERVER.host,
    historyApiFallback: true,
    quiet: true,
    hotOnly: true,
    hot: true,
    overlay: {
      errors: true,
      warnings: false,
    },
    clientLogLevel: 'none',
  }),
};

const configs = {
  define: { NODE_ENV: JSON.stringify(NODE_ENV) },
  clean: { root: PATHS.root },
  html: ENV.isProduction
    ? { inject: true, template: PATHS.html }
    : {
        inject: true,
        template: PATHS.html,
        chunksSortMode: 'dependency',
      },
};

const buildTarget = () => {
  console.log(`building: ${BUILD_TARGET}, env: ${NODE_ENV}`);
};

module.exports.configs = configs;
module.exports.helpers = helpers;
module.exports.buildTarget = buildTarget;
