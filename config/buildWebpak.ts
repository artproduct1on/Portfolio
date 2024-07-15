import webpack from "webpack";

import { buildDevServer } from "./buildDevSrver";
import { buildLoaders } from "./buildLoader";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/buildTypes";


export function buildWebpack(options: BuildOptions): webpack.Configuration {

    const {mode, paths} = options;
    const isDev = mode === "development";


    return {
        mode: mode ?? "development",

        entry:  paths.entry , 
        output: {
            path: isDev ? paths.outputDev : paths.outputProd, 
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map' ,
        devServer: buildDevServer(options)
    };
};