import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/buildTypes";
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import fs from "fs";

export function buildPlugins({paths}: BuildOptions): Configuration["plugins"] {

    const getFilesFromDirectory = (dirPath: string) => {
        return fs.readdirSync(dirPath).map(i => i.replace(".html", ""));
    };
    const filesList: string[] = getFilesFromDirectory(paths.html);

    const htmlGeneration = (templates: string[]) => {
        return templates.map(i => {
            return new HtmlWebpackPlugin({
                template: paths.html + `/${i}.html`,
                filename: i === "index" ? `${i}.html` : `${i}/index.html`,
            });
        });
    };
    const plugins: Configuration["plugins"] = [
        ...htmlGeneration(filesList),  
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new SpriteLoaderPlugin() as any,
    ];

    return plugins;
   
};