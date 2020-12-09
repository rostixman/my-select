const { PATHS } = require('./webpack.consts');

module.exports.loaders = [
  {
    test: /\.(jsx|js)?$/,
    enforce: 'pre',
    loader: 'eslint-loader',
    include: PATHS.root,
    exclude: [/node_modules/],
  },
  {
    test: /\.(jsx|js)?$/,
    loader: 'babel-loader',
    include: PATHS.root,
    exclude: [/node_modules/],
  },
  {
    test: /\.(css|scss|sass)$/,
    loader: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(ico|eot|otf|ttf|woff|woff2)(\?.*)?$/,
    loader: 'file',
    query: {
      name: 'assets/[name].[ext]',
    },
  },
  {
    test: /\.svg/,
    loader: 'svg-url-loader',
  },
];
