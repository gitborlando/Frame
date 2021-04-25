const path = require('path')

module.exports = {  
    mode: 'production',
    entry: ['babel-polyfill', './src/Frame.js'],
    output: {
        library: 'Frame',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.join(__dirname, '/dist/'),
        filename: 'index.js'
    },
    module: {  
        rules: [{  
            test: /\.js$/,  
            exclude: /node_modules/,  
            loader: 'babel-loader'  
        }]  
    },
    target: false, 
}
