require('colors')
const { projectNames } = require('./../constants/projects') // 项目集合常量

const welcomeLog = () => {
  console.log('🎉欢迎使用haroro-cli脚手架工具 ~')
  console.log('🐞Bug Report：请联系hutao-haroro@qq.com ~')
  console.log('（小声BB：不存在bug的，毕竟没什么功能）')
}

/**
 * @function 创建项目log
 * @param {object} projectData 模板项目信息
 **/
const gitDownloadLog = projectData => {
  const {
    name,
    homePage,
  } = projectData
  console.log('\n')
  name && console.log(`🎉 正在创建：${projectData.name}`.blue)
  homePage && console.log(`🚧 项目主页：${projectData.homePage}`.blue)
  console.log('⭐️ 给项目点个star个呗？'.yellow)
}

const projectsDataLog = () => {
  for (let key in projectNames) {
    const item = projectNames[key]
    console.log('项目名称：'.green, key.yellow)
    console.log('项目简介：'.green, item.description)
    console.log('项目作者：'.green, item.author)
    console.log('项目主页：'.green, item.homePage)
    console.log(`-------------------------`.rainbow)
  }
}

function debugLog () {
  console.log('DEBUG LOG START')
  Object.keys(arguments).forEach(item => {
    console.log(arguments[item])
  })
  console.log('DEBUG LOG END')
  process.exit()
}

module.exports = {
  debugLog,
  welcomeLog,
  gitDownloadLog,
  projectsDataLog,
}
