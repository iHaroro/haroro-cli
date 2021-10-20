#!/usr/bin/env node
const { program } = require('commander')

// 命令功能
require('./src/modules/create') // 创建模板项目
require('./src/modules/createModule') // 创建页面模快
require('./src/modules/ls') // 模板列表
require('./src/modules/version') // 版本号
require('./src/modules/help') // 帮助

program.parse(process.argv)
