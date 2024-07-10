import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildPlugins({paths}: BuildOptions): Configuration["plugins"] {

    const htmlList: string[] = ["de", "en", "ua", "ru"] 

    const htmlGenerstion = (templates: string[]) => {
        return templates.map(i => {
            return new HtmlWebpackPlugin({
                template: paths.html + `/${i}.html`,
                filename: i === "en" ? 'index.html' : `${i}/index.html`,
            });
        });
    };


    const plugins: Configuration["plugins"] = [
        ...htmlGenerstion(htmlList),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ];



    return plugins;
   
}