const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'bundle'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    },
    plugins: [
        new copyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'index.html'), to: path.resolve(__dirname, 'bundle/index.html') },
                { from: path.resolve(__dirname, 'src/static'), to: path.resolve(__dirname, 'bundle/resources') },
            ],
        }),
    ]
};