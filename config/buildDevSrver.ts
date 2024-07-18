import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/buildTypes";
import path from "path";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        watchFiles: [ 
            path.resolve(__dirname, "../src/**/*"),
        ],
        static: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../build')
        ]
        
    
 
    };
};