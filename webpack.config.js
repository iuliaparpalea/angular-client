const dist = 'dist',
      webpack = require('webpack'),
      workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "APPLICATION_NAME": JSON.stringify("AMP")
    }),
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    })
  ]
};
