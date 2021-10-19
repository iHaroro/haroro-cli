#!/usr/bin/env node
const packageJson = require('./package.json')
const colors = require('colors')
const { program } = require('commander')
const downloadGitRepo = require('download-git-repo')
const ora = require('ora')
const { projectNames } = require('./src/constants/projects') // 项目集合常量
const {
  gitDownloadLog,
  welcomeLog,
  projectsDataLog,
} = require('./src/utils/logPrints') // 各种log

program.version(packageJson.version) // 版本号

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
    const spinner = ora('正在下载项目模板').start()

    downloadGitRepo(projectData.repositoryUrl, Dirname || projectName, {}, err => {
      if (err) {
        console.log(err)
        spinner.fail('下载失败了，换个姿势试试？（小声BB：你这网可能不行）')
      } else {
        spinner.succeed('下载完成了，请尽情享用吧~~~')
      }
    })
  })

program
  .command('help')
  .description('查看帮助')
  .action(() => {
    welcomeLog()
    console.log('🔎 项目相关帮助'.blue)
    console.log('🌐 haroro-cli: https://www.npmjs.com/package/haroro-cli'.green)
    console.log('🌐 react-entry-template: https://github.com/iHaroro/react-entry-template'.green)
  })

program
  .command('ls')
  .description('查看所有可用的项目模板')
  .action(() => {
    projectsDataLog()
    console.log('好吧，说实话，我们暂时没有其他模板了😭')
  })

program.parse(process.argv)
