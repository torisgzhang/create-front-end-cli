const fse = require('fs-extra')
const path = require('path')

const jsonConfig = {
  "name": "front-end-cli",
  "mirror": "http://139.224.53.31/download/"
}

const configPath = path.resolve(__dirname,'../config.json')

async function defConfig() {
  try {
    await fse.outputJson(configPath, jsonConfig)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

module.exports = defConfig
