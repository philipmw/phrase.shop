const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/appEntry.tsx',
  output: {
    path: path.resolve(__dirname, 'docs'), //`docs` as a GitHub Pages requirement
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(ts|tsx)$/, use: 'ts-loader'}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs') //`docs` as a GitHub Pages requirement
  },
  resolve: {
    alias: {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // Must be below test-utils
    },
    extensions: [
      '.js', // needed for webpack-dev-server: https://github.com/webpack/webpack-dev-server/issues/720#issuecomment-268470989
      '.ts',
      '.tsx']
  }
};