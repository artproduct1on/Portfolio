import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): ModuleOptions["rules"] {

    const assets = {
        test: /\.(png|jpg|gif|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name].[hash].[ext]'
        },
          
    };

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
        ]
    };   

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [
        assets,
        htmlLoader,
        scssLoader, 
        tsLoader
    ]
} 