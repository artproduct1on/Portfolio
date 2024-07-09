import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";



export function buildPlugins({paths}: BuildOptions): Configuration["plugins"] {


    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        })
    ];

    return plugins;
   
}