const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public", "assets"),
        filename: "bundle.js",
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
}