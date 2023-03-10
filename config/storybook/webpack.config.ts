import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoaders(true));

  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule) => (
    /svg/.test(rule.test as string)
      ? { ...rule, exclude: /\.svg$/i }
      : rule
  ));

  config.module!.rules!.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });
  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV: JSON.stringify(false),
      __API: JSON.stringify(''),
      __PROJECT: JSON.stringify('storybook'),
    }),
  );

  return config;
};
