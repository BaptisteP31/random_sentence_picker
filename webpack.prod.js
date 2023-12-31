const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules:
        [
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
});