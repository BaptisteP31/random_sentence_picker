const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 }},
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    devtool : 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 3000,
        open: false,
    }
});