const path = require('path');
module.exports = env => {
    return{
        entry: {
            app:'./src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                test:/\.js?$/,
                exclude:[/node_modules/],
                loader:'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        ["@babel/plugin-proposal-decorators", {decoratorsBeforeExport:true}],
                        "@babel/plugin-proposal-class-properties",
                        '@babel/plugin-transform-runtime'
                    ]
                }
            }]

        },
        mode: 'development'
    }
}

/**
 ["@babel/plugin-transform-runtime", { "regenerator": true } ],
 "@babel/plugin-transform-regenerator",
 "@babel/plugin-transform-async-to-generator",
 ["@babel/plugin-proposal-decorators", { "legacy": true }],
 ["@babel/plugin-proposal-class-properties", { "loose" : true }],
**/