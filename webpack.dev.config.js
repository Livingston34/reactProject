const path = require('path');
console.log(__dirname)
module.exports = {

    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src/main.js')
    ],

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.resolve(__dirname, 'src')
        }]
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },

    resolve: {
        alias: {
            // pages: path.resolve(__dirname, 'src/pages'),
            components: path.resolve(__dirname, 'src/components'),
            router: path.resolve(__dirname, 'src/router'),
            // actions: path.resolve(__dirname, 'src/redux/actions'),
            // reducers: path.resolve(__dirname, 'src/redux/reducers'),
            // mock: path.resolve(__dirname, 'mock')
        }
    }
};