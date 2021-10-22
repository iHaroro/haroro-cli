const colors = require('colors')
const { program } = require('commander')
const clone = require('git-clone')
const ora = require('ora')
const { projectNames } = require('./../constants/projects') // 项目集合常量
const { gitDownloadLog } = require('./../utils/logPrints') // log

program
  .command('create <projectName>')
  .description('创建项目模板')
  .option('-dirname <dirname>', '模板下载文件夹别名')
  .action((projectName = 'react-entry-template', options) => {
    // 获取项目信息
    const projectData = projectNames[projectName.toLocaleLowerCase()]
    // 命令参数
    const { Dirname = '' } = options
    // 欢迎语
    gitDownloadLog(projectData)
    // loading
    const loading = ora('正在下载项目模板').start()

    clone(
      projectData.repositoryUrl,
      Dirname || projectName,
      {},
      err => {
        if (err) {
          console.log(err)
          loading.fail('下载失败了，换个姿势试试？（小声BB：你这网可能不行）'.red)
        } else {
          loading.succeed('下载完成了，请尽情享用吧~~~'.green)
        }
      },
    )
  })
