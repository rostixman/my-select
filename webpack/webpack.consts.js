const path = require('path');
const root = process.cwd();

const NODE_ENV = process.env.NODE_ENV || 'development';
const BUILD_TARGET = process.env.BUILD_TARGET || 'web';

const PATHS = {
  root: root,
  src: path.resolve(root, './src'),
  app: path.resolve(root, './src/app'),
  dist: path.resolve(root, './dist'),
  entry: path.resolve(root, './src/base/index.jsx'),
  html: path.resolve(root, './src/base/index.html'),
  pub: '/',
};

const ENV = {
  isDevelopment: NODE_ENV === 'development',
  isProduction: NODE_ENV === 'production',
};

const SERVER = {
  port: 3000,
  host: 'localhost',
};

module.exports.ENV = ENV;
module.exports.PATHS = PATHS;
module.exports.NODE_ENV = NODE_ENV;
module.exports.BUILD_TARGET = BUILD_TARGET;
module.exports.SERVER = SERVER;
