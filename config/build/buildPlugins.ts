import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildPlugins({mode, paths}: BuildOptions): Configuration["plugins"] {

    const isDev = mode === "development";

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: paths.html
        })
    ];

    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }))
    };

    return plugins;
   
}