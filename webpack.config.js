const path = require('path');

module.exports = {
  entry: {
    test: './test/Bar.ts',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test:    /\.tsx?$/,
        use:     'ts-loader',
        exclude: [
          /node_modules/,
        ]
      },
      {
        test: /\.(vtx|frg)$/,
        use:  'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vtx', '.frg' ],
  },
  output: {
    filename: '[name].bundle.js',
    path:      path.resolve(__dirname, 'dist'),
  },
};
