var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.scss?$/,
        use: [
          "style-loader",
          "css-loader",
          {
          loader: 'sass-loader',
          options: {
            data: "@import 'global-imports.scss';",
            includePaths: [path.resolve(__dirname, 'app/styles/')]
          },
        }],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080
  }
};
