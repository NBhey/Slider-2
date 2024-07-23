const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:"bundle-prod.js",
        path:path.resolve(__dirname,'prod'),
    },
    module: {
        rules: [
          {
            test: /\.html$/,
            use: 'html-loader',
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
        ],
      },
    devServer:{
        hot: true,
        port:8081
    },
    plugins: [
        // спросить у преподавтеля как описать цикл, чтобы пройтись по всем html файлам в папке
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'index.html'),
        }),
    ]
}