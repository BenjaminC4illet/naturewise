module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    '@storybook/addon-docs',
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "storybook-design-token",
    '@storybook/addon-controls',
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
