const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
          "APPLICATION_NAME": JSON.stringify("AMP")
        })
    ]
};
