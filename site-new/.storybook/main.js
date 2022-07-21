const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-tailwind-dark-mode',
  ],
  // framework: '@storybook/react',
  core: {
    // builder: '@storybook/builder-webpack5',
    builder: 'webpack5',
  },
  webpackFinal: (config, { configType }) => {
    // @ Symbol Aliasesb
    config.resolve.alias = {
      ...config.resolve.alias,
      '@img': path.resolve(__dirname, '../public/img'),
      '@components': path.resolve(__dirname, '../components'),
      '@data': path.resolve(__dirname, '../data'),
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    })

    return config
  },
}
