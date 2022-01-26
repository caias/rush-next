/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: path.join(__dirname, 'assets', 'icons'),
      use: [
        {
          loader: 'svg-sprite-loader',
        },
        'svgo-loader',
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
