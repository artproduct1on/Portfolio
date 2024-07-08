import path from "path";
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
type Mode = "production" | "development";

interface EnvVariabels {
    port: number,
    mode: Mode
}

export default (env: EnvVariabels) => {

    const isDev = env.mode === "development";


    const config: webpack.Configuration = {
        mode: env.mode ?? "development",

        entry:  path.resolve(__dirname, "src", "index.ts"), 
        output: {
            path:  path.resolve(__dirname, env.mode ? "build" : "dist" ), 
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src", "index.html")
            })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                }
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        devtool: isDev && 'inline-source-map' ,
        devServer: {
            static: path.join(__dirname, 'build'),
            port: env.port ?? 3000,
            open: true,
        } 
    };

    return config;
}