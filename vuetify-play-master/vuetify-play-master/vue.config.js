//模拟数据
const express = require('express')
const app = express()
//粉丝数据
let followers = require('./src/data/followers.json')
let repos = require('./src/data/repos.json')
let apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8088,
    https: false,
    open: true,
    hotOnly: true,
    before(app) {
      app.get('/api/followers', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: followers
        })
      }),
        app.get('/api/repos', (req, res) => {
          res.json({
            code: 1,
            msg: '成功',
            data: repos
          })
        })
    }
  },
  transpileDependencies: ['vuetify']
}
