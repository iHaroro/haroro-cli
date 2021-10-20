const colors = require('colors')
const { program } = require('commander')
const path = require('path')

program
  .command('module <name>')
  .description('创建页面模块，PS：请在项目根目录执行该命令，默认将创建在：project-root/src/pages')
  .option('-dirname <dirname>', '页面模块创建的项目路径，默认值：/src/pages')
  .option('-frame <framename>', '创建的模块类型，默认值：React，PS：暂未实现')
  .action((name, options) => {
    const projectRoot = process.cwd() // 项目路径
    const { Dirname = '/src/pages' } = options // 创建路径
    const createPath = path.join(projectRoot, Dirname) // 完整的创建路径
    console.log(createPath)
  })
