const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'app.bundle.js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {test: /\.(ts|tsx)$/, use: 'ts-loader'}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'web')
  },
  resolve: {
    extensions: [
      '.js', // needed for webpack-dev-server: https://github.com/webpack/webpack-dev-server/issues/720#issuecomment-268470989
      '.ts',
      '.tsx']
  }
};