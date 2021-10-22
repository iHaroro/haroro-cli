const path = require('path')
const { BannerPlugin } = require('webpack')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: path.resolve(__dirname, './../index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
  },
  plugins: [
    new BannerPlugin({ // 文件头部增加banner
      raw: true,
      entryOnly: true,
      banner: () => '#!/usr/bin/env node',
    }),
  ],
}
