/**
 * @description 脚本测试
 */
const fs = require('fs')
const { deleteFolder } = require('./file')
const { GET_CURRENT_COMMAND_PATH } = require('../utils/pathUtils')

deleteFolder('/Users/haroro/Documents/gitItem/timecaps-h5-react')

fs.readdir(GET_CURRENT_COMMAND_PATH(), {}, (err, files) => {
  console.log(err, files)
})
