const path = require('path')
/**
 * @function 获取当前命令行执行路径
 * @returns {string} 当前命令行执行路径
 **/
const GET_CURRENT_COMMAND_PATH = () => path.resolve(__dirname, process.cwd())

module.exports = {
  GET_CURRENT_COMMAND_PATH,
}
