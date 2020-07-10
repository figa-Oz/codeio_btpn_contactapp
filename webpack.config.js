const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: ["@babel/polyfill", path.join(__dirname, '/src/index.js')],
    output: {
        filename: 'build.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ['transform-class-properties', 'transform-object-rest-spread']
                    }
                }
                // query: {
                //     plugins: ['transform-class-properties', 'transform-object-rest-spread']
                // }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader?limit=25000'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'sass-loader'],
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins:[
        new HWP(
            {
                template: path.join(__dirname,'/public/index.html'),
                filename: "./index.html"
            }
        )
    ]
}