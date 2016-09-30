module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/public',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: './dist/public',
    inline: true
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
