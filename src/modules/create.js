const colors = require('colors')
const { program } = require('commander')
const inquirer = require('inquirer')
const clone = require('git-clone')
const ora = require('ora')
const path = require('path')
const fs = require('fs')
const { deleteFolder } = require('./../utils/file')
const { projectNames } = require('../constants/projects') // 项目集合常量
const { gitDownloadLog } = require('../utils/logPrints') // log
const { CURRENT_COMMAND_PATH } = require('../utils/pathUtils')

const projectList = Object.keys(projectNames) // 项目名列表

program
  .command('create')
  .description('创建项目模板')
  .option('--dirname <dirname>', '模板下载文件夹别名')
  .action(options => {
    inquirer.prompt([
      {
        type: 'list',
        message: '请选择一个项目模板：',
        name: 'projectName',
        default: projectList[0],
        choices: projectList,
      },
    ]).then(projectAnswer => {
      const { projectName } = projectAnswer // 选择的项目模板名称
      const projectData = projectNames[projectName.toLocaleLowerCase()] // 选择的项目模板信息
      const { dirname = projectName } = options // 命令参数
      gitDownloadLog(projectData) // 欢迎语
      // 读取文件夹
      fs.readdir(CURRENT_COMMAND_PATH(), {}, (err, files) => {
        if (err) {
          console.log(err.message.red)
        } else {
          // 文件名是否重复
          if (files.includes(dirname)) { // 重名，提示是否覆盖创建
            inquirer.prompt([
              {
                type: 'confirm',
                message: '文件名已存在，是否覆盖创建？',
                name: 'coverCreate',
                default: false,
              },
            ]).then(answer => {
              const { coverCreate } = answer
              if (coverCreate) {
                const createProjectPath = path.join(CURRENT_COMMAND_PATH(), dirname)
                console.log(`那我就干掉${dirname}这个文件夹了哦~`.yellow)
                deleteFolder(createProjectPath)
                cloneProject(projectData, dirname).then(res => {}).catch(err => {})
              } else {
                console.log('行吧，那我走了~'.green)
              }
            })
          } else { // 未重名，直接创建
            cloneProject(projectData, dirname).then(res => {}).catch(err => {})
          }
        }
      })
    })
  })

const cloneProject = (projectData, dirname) => new Promise((resolve, reject) => {
  const loading = ora('正在下载项目模板\n').start()
  clone(projectData.repositoryUrl, dirname, {}, err => {
    if (err) {
      console.log(err.message)
      loading.fail('下载失败了，换个姿势试试？（小声BB：你这网可能不行）'.red)
      reject()
    } else {
      loading.succeed('下载完成了，请尽情享用吧~'.green)
      resolve()
    }
  })
})
