require('babel-core/register'); // development.jsでES6を使えるようにする

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: []
};