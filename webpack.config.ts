import webpack from 'webpack';
import path from 'path';
import { buildWebpack } from "./config/buildWebpak";
import { BuildMode } from './config/types/types';

interface EnvVariables {
    mode: BuildMode;
    port: number;
}

export default (env: EnvVariables) => {
    const paths = {
        entry: path.resolve(__dirname, "src", "index.ts"),
        html: path.resolve(__dirname, "src", "pages"),
        output: path.resolve(__dirname, "build"),
    
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths
    })
    return config;
}