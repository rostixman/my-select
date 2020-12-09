const Clean = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');
const Define = require('webpack').DefinePlugin;
const HMR = require('webpack').HotModuleReplacementPlugin;
const NoEmitOnErrors = require('webpack').NoEmitOnErrorsPlugin;
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const BuildNotifier = require('webpack-build-notifier');
const Dashboard = require('webpack-dashboard/plugin');

const { ENV } = require('./webpack.consts');
const { configs } = require('./webpack.utils');

const defaultPlugins = [new Define(configs.define), new Html(configs.html)];

const developmentPlugins = [
  ...defaultPlugins,
  new NoEmitOnErrors(),
  new HMR(),
  new FriendlyErrors(),
  new BuildNotifier(),
  new Dashboard(),
];

const productionPlugins = [...defaultPlugins, new Clean(configs.clean)];

const plugins = ENV.isProduction ? productionPlugins : developmentPlugins;

module.exports.plugins = plugins;
