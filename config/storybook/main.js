module.exports = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-react-i18next'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    // builder: 'webpack5',
  },
  docs: {
    autodocs: true,
  },
};
