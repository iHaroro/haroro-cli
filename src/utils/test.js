/**
 * @description 脚本测试
 */
const fs = require('fs')
const { deleteFolder } = require('./file')
const { CURRENT_COMMAND_PATH } = require('../utils/pathUtils')

deleteFolder('/Users/haroro/Documents/gitItem/timecaps-h5-react')

fs.readdir(CURRENT_COMMAND_PATH(), {}, (err, files) => {
  console.log(err, files)
})
