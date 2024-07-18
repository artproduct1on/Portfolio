import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export function buildLoader(): ModuleOptions["rules"] {

    const htmlLoader = {
        test: /\.html$/i,
        loader: 'html-loader',
    };
    
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader", 
            "sass-loader"
        ],
    };   

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const assets = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name].[hash].[ext]'
        },
          
    };

    const ico = {
        test: /\.(ico)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name].[ext]'
        },
          
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {   
                loader: 'svg-sprite-loader',  
                options: {
                    extract: true,
                    spriteFilename: 'assets/sprite.svg',
                    runtimeCompat: true,
                    symbolId: '[name]_[hash]',
                    symbolConfig: {
                        symbol: true,
                    }
                },
            },
        ],
    };


    return [
        tsLoader,
        scssLoader, 
        svgLoader,
        assets,
        ico,
        htmlLoader,
    ]
} 