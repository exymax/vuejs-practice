module.exports = {
    entry: "./js/app",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    watch:true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            }
        ]
    }
};
