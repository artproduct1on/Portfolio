import { Configuration } from "webpack";
import { BuildOptions } from "./types/buildTypes";

export function buildResolvers(options: BuildOptions): Configuration["resolve"] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}