const path = require('path') //No I18N
    
module.exports = {
    mode: 'development', //No I18N
    entry: {
        bundle: path.resolve(__dirname, 'src/main.js'), //No I18N
    },
    
    output: {
        path: path.resolve(__dirname, 'dist'), //No I18N
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    }
}



