const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'docs',
    historyApiFallback: true,
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader?sourceMap=inline'
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
