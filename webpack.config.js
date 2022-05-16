const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}  = require('clean-webpack-plugin');


module.exports = {
    entry: {
        index:"./src/index.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                // 加载css
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 加载图片
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                // 配置babel
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        //清理dist文件夹
        //new CleanWebpackPlugin(),

        //生成新的index.html
        //new HtmlWebpackPlugin(),
    ],
    mode: "production" // 不打包没有使用的代码
}