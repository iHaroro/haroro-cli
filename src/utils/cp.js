const fs = require('fs')
const path = require('path')

function copy (from, to, callback) {
  const fromPath = path.resolve(from)
  const toPath = path.resolve(to)
  fs.access(toPath, function (err) {
    if (err) {
      fs.mkdirSync(toPath)
    }
  })
  fs.readdir(fromPath, function (err, paths) {
    if (err) {
      console.log(err.message)
      return
    }
    paths.forEach(item => {
      const newFromPath = fromPath + '/' + item
      const newToPath = path.resolve(toPath + '/' + item)

      fs.stat(newFromPath, function (err, stat) {
        if (err) {
          console.log(err.message)
          return
        }
        if (stat.isFile()) {
          copyFile(newFromPath, newToPath)
        } else if (stat.isDirectory()) {
          copy(newFromPath, newToPath)
        }
      })
    })
    callback()
  })
}

function copyFile (from, to) {
  fs.copyFileSync(from, to)
}

module.exports = {
  copy,
}
