module.exports = {
  outputDir: './dist',
  assetsDir: './assets/',
  publicPath: './',
  indexPath: './index.html',

  devServer: {
    host: 'localhost', // 主机
    port: 8080, // 端口
    https: false,
    open: true,
    hotOnly: true
  }
}