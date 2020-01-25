const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env","@babel/preset-react"]
                }
            }
        }
        ]
    },
    devServer: {
        publicPath: "/build/",
        proxy: {
            "/": "https://localhost:3000"
        }
    },
    mode: process.env.node_env
}


