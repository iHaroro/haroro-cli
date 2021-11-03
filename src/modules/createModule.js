const colors = require('colors')
const { program } = require('commander')
const path = require('path')
const fs = require('fs')
const { copy } = require('../utils/file')
const ora = require('ora')

program
  .command('module <name>')
  .description('创建页面入口模块，PS：请在项目根目录执行该命令，默认将创建在：project-root/src/pages')
  .option('--dirname <dirname>', '页面模块创建的项目路径，默认值：/src/pages')
  .option('--frame <framename>', '创建的模块类型（Vue，React），默认值：React，PS：暂未实现')
  .action((name, options) => {
    const projectRoot = process.cwd() // 项目路径
    const { dirname = '/src/pages' } = options // 创建路径
    const createPath = path.join(projectRoot, dirname) // 完整的创建路径
    const templatePath = path.join(__dirname, '../assets/template/react-module-template') // 页面模板路径

    const loading = ora().start(`🚧 将在 ${createPath} 目录下创建页面模块`.blue)

    fs.readdir(createPath, (err, files) => {
      if (err) {
        loading.fail(`${err.message}`.red)
        process.exit()
        return
      }
      if (files.includes(name)) { // 已包含当前的文件模块名，报错
        loading.fail('当前模块已存在，换个模块名试试？'.red)
      } else {
        // 复制文件夹
        copy(templatePath, `${createPath}/${name}`, () => {
          loading.succeed('创建成功啦，快去去搬砖吧，老板的玛莎拉蒂就靠你了~'.green)
        })
      }
    })
  })
