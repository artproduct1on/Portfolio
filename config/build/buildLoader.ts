import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";

export function buildLoaders({mode}: BuildOptions): ModuleOptions["rules"] {
    const isDev = mode === "development";

    const scssLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const tsLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
            "css-loader", 
            "sass-loader"
         ]
    };

    return [scssLoader, tsLoader]
} 