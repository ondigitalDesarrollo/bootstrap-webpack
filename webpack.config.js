const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/app.js"),
    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: '[name].[chunkhash].js'
    },
    watch: true,
    module: {
         rules: [
           {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
}