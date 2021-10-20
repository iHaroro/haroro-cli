const { program } = require('commander')
const { projectsDataLog } = require('./../utils/logPrints')

program
  .command('ls')
  .description('查看所有可用的项目模板')
  .action(() => {
    projectsDataLog()
    console.log('好吧，说实话，我们暂时没有其他模板了😭')
  })
