const path = require('path');

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    /**
     * storybook 기본 내장된 image file loader와 겹침으로 인한 svg regex 제거
     * 추후 정적 svg가 필요하다면 따로 file loader rule을 push해줘야될듯
     */
    config.module.rules = config.module.rules
      .map(rule => {
        if (rule.test && rule.test.toString().includes('svg')) {
          const test = rule.test
            .toString()
            .replace('svg|', '')
            .replace(/\//g, '');
          return { ...rule, test: new RegExp(test) };
        } else {
          return rule;
        }
      })
      .concat({
        test: /\.svg$/,
        include: path.join(process.cwd(), 'assets', 'icons'),
        use: [
          {
            loader: 'svg-sprite-loader',
          },
          'svgo-loader',
        ],
      });
    console.log(config.module.rules);
    return config;
  },
}