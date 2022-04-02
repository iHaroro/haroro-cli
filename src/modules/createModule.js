require('colors')
const { program } = require('commander')
const path = require('path')
const fs = require('fs')
const { copy } = require('../utils/file')
const ora = require('ora')
const packageJson = require('../../package.json')
const {
  projectNames,
  projectConfigFileName,
} = require('../constants/projects')

program
  .command('module <name>')
  .description('创建页面入口模块，PS：请在项目根目录执行该命令，默认将创建在：project-root/src/pages')
  .option('--dirname <dirname>', '页面模块创建的项目路径，默认值：/src/pages')
  .action((name, options) => {
    const projectRoot = process.cwd() // 项目路径
    
    const loading = ora().start(`🚧 将在当前项目目录下创建页面模块`.blue)
    
    // 检查haroro-cil-config.json文件
    fs.readdir(projectRoot, (err, projectFiles) => {
      if (err) {
        loading.fail(`${err.message}`.red)
        process.exit()
      }
      // 检测到配置文件
      if (projectFiles.includes(projectConfigFileName)) {
        const config = JSON.parse(fs.readFileSync(path.join(projectRoot, projectConfigFileName)).toString())
        const projectConfig = projectNames[config.name]
        if (!projectConfig) {
          loading.fail(`找不到name为${config.name}相关的项目配置！`.red)
          loading.fail(`可选的配置项：${Object.keys(projectNames)}`.red)
          loading.fail(`相关配置请查看：${packageJson.homepage}`.red)
          process.exit()
        }
        const { dirname = projectConfig.moduleRoot } = options // 创建路径
        const createPath = path.join(projectRoot, dirname) // 完整的创建路径
        const templatePath = projectConfig.moduleTemplatePath // 页面模板路径
        // 读取项目文件
        fs.readdir(createPath, (err, files) => {
          if (err) {
            loading.fail(`${err.message}`.red)
            process.exit()
          }
          // 已包含当前的文件模块名 截断操作
          if (files.includes(name)) {
            loading.fail(`当前模块名：${name}，已存在，换个模块名试试？`.red)
          } else {
            // 复制文件夹
            copy(templatePath, `${createPath}/${name}`, () => {
              loading.succeed('创建成功啦，快去去搬砖吧，老板的玛莎拉蒂就靠你了~'.green)
            })
          }
        })
      } else {
        loading.fail(`未找到配置文件 ${projectConfigFileName}!（小声BB：这里可能根本不是项目目录...你是不是在耍我？）`.red)
        process.exit()
      }
    })
  })
