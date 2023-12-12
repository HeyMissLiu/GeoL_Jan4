const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require('path');

module.exports = {
    //设置打包模式为开发环境
    mode: 'development',
    //设置文件入口
    entry: './src/test.js',
    //设置文件出口
    output: {
        //输出的路径（dist文件夹）
        path: resolve(__dirname, 'dist'),
        //输出的名字
        filename: 'bundle.js',
    },
    // 模块配置
    module: {
        rules: [
            //css配置
            {
                //匹配css文件
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            //图片配置
            {
                //匹配图片
                test: /\.(jpg|png|jpeg|gif|bmp|webp)$/i,
                type: "asset",
                generator: {
                    filename: "img/[hash:5][ext]",
                },
                //base64编码,80kb以下进行编码
                parser: {
                    dataUrlCondition: {
                        maxSize: 80 * 1024,
                    },
                }
            }
        ],
    },
    // 开发服务器的配置
    devServer: {},
    // 插件配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/test.html',
            filename: 'test.html',
        }),
        new MiniCssExtractPlugin({
            filename: '.css/main.css',
        })
    ],
};