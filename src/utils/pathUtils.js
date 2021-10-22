const path = require('path')
/**
 * @function 当前命令行执行路径
 * @returns {string} 当前命令行执行路径
 **/
const CURRENT_COMMAND_PATH = () => path.resolve(__dirname, process.cwd())

module.exports = {
  CURRENT_COMMAND_PATH,
}
