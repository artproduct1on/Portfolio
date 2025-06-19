import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/buildTypes";
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import fs from "fs";

export function buildPlugins({ mode }: BuildOptions): Configuration["plugins"] {

  const isDevelopment: boolean = mode === "development";
  const languages = ['en', 'uk', 'de'];

  const createHtmlPlugins = () => {

    return languages.map(lang => {
      const translations = JSON.parse(
        fs.readFileSync(`./src/locales/${lang}.json`, 'utf-8')
      );

      return new HtmlWebpackPlugin({
        filename: lang === 'en' ? `index.html` : `${lang}/index.html`,
        template: './src/template.ejs',
        inject: 'body',
        templateParameters: {
          t: translations,
          baseAssetsPath: lang === 'en' ? './assets' : `../assets`,
          lang,
        }
      });
    });
  };

  const plugins: Configuration["plugins"] = [
    new SpriteLoaderPlugin() as any,
    ...createHtmlPlugins(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css',
    }),

  ];

  return plugins;

};