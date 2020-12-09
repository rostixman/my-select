const { helpers, buildTarget } = require('./webpack.utils');
const { loaders } = require('./webpack.loaders');
const { plugins } = require('./webpack.plugins');

buildTarget();
module.exports = {
  mode: helpers.mode(),
  entry: helpers.entry(),
  output: helpers.output(),
  resolve: helpers.resolve(),
  devServer: helpers.server(),
  devtool: helpers.sourceMap(),
  plugins: plugins,
  module: { rules: loaders },
};
