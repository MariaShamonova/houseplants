const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');
 
const IS_DEV = process.env.NODE_ENV === 'development';
 
module.exports = {
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    sourceMap: IS_DEV
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {
                          query: {
                            name:'src/[name].[ext]'
                          }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                progressive: true,
                                },
                                gifsicle: {
                                interlaced: true,
                                },
                                optipng: {
                                optimizationLevel: 7,
                                }
                            }
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}