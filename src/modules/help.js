const colors = require('colors')
const { program } = require('commander')
const { welcomeLog } = require('../utils/logPrints')

program
  .command('help')
  .description('查看帮助')
  .action(() => {
    welcomeLog()
    console.log('🔎 项目相关帮助'.blue)
    console.log('🌐 haroro-cli: https://www.npmjs.com/package/haroro-cli'.green)
    console.log('🌐 react-entry-template: https://github.com/iHaroro/react-entry-template'.green)
  })
