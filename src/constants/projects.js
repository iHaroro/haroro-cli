const path = require('path')
/**
 * @description 项目地址信息，键值使用小写处理
 */
const projectNames = {
  'react-entry-template': {
    key: 'react-entry-template',
    name: 'React.v17多入口项目模板',
    author: 'Haroro',
    description: 'React.v17多入口项目模板',
    homePage: 'https://github.com/iHaroro/react-entry-template/tree/master',
    repositoryUrl: 'git@github.com:iHaroro/react-entry-template.git',
    moduleRoot: '/src/pages',
    moduleTemplatePath: path.resolve(__dirname, '../assets/template/react-module-template'),
  },
  'vue3-entry-template': {
    key: 'vue3-entry-template',
    name: 'Vue.v3多入口项目模板',
    author: 'Haroro',
    description: 'Vue.v3多入口项目模板',
    homePage: 'https://github.com/iHaroro/vue3-entry-template/tree/master',
    repositoryUrl: 'git@github.com:iHaroro/vue3-entry-template.git',
    moduleRoot: '/src/modules',
    moduleTemplatePath: path.resolve(__dirname, '../assets/template/vue-module-template'),
  },
}

const projectConfig = {
  name: 'react-entry-template',
}

const projectConfigFileName = 'haroro-cli-config.json'

module.exports = {
  projectNames,
  projectConfig,
  projectConfigFileName,
}
