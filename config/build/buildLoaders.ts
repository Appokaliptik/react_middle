import { BuildOption } from './types/config';
import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildLoaders({ isDev }: BuildOption): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: ((resourcePath: string) => resourcePath.includes('.module.')),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : '[hash:base64:5]',
          }

        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  return [
    typescriptLoader,
    cssLoader
  ]
}