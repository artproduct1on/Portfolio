import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/buildTypes";
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import fs from "fs";

export function buildPlugins({mode, paths}: BuildOptions): Configuration["plugins"] {

    const isDevelopment: boolean = mode === "development";

    const getFilesFromDirectory = (dirPath: string) => {
        return fs.readdirSync(dirPath).map(i => i.replace(".html", ""));
    };
    const filesList: string[] = getFilesFromDirectory(paths.html);

    const htmlGeneration = (templates: string[]) => {
        return templates.map(i => {
            return new HtmlWebpackPlugin({
                template: paths.html + `/${i}.html`,
                filename: i === "index" ? `${i}.html` : `${i}/index.html`,
                inject: 'body',
                minify: false,
            });
        });
    };
    const plugins: Configuration["plugins"] = [ 
        new SpriteLoaderPlugin() as any,
        ...htmlGeneration(filesList), 
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css',
        }),
        
    ];

    return plugins;
   
};