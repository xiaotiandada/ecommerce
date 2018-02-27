'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

// express 模拟数据
const express = require('express')
const apiServer = express()
// 用来返回json数据
const bodyParser= require('body-parser')　　　
apiServer.use(bodyParser.urlencoded({extended : true}))
apiServer.use(bodyParser.json())
const apiRouter = express.Router()　　//　设置api路由
const fs = require('fs')　　　// 文件系统交互
apiRouter.get('/', (req, res)=>{
  res.json({message: 'hooray! welcome to our api!'})
})
apiRouter.route('/:apiName')   //apiName 定义接口名称变量
.all( (req, res)=>{　　　　　　　　　　　// .all即支持包括get\post在内的所有xhr请求  　执行后面的回调
  fs.readFile( path.join(__dirname, 'db.json'), 'utf8', (err, data)=>{  //db.json 自己配置的模拟数据
    // console.log(path.join(__dirname, 'db.json'))
    if(err) throw err
    let datas = JSON.parse(data)     // 将从服务器端获取到的json对象转换为普通js对象  保存给datas
    if(datas[req.params.apiName]){
      res.json(datas[req.params.apiName])
    } else {
      res.send('no such api name')
    }
  })
})
apiServer.use('/api/', apiRouter)　　 //  配置 '/api'是因为做了服务器代理，所有要指明代理地址  
apiServer.listen(8081, (err)=>{　　　　//配置接口端口号
  if(err){
    console.log(err)
    return
  }
})

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


// server.js  json-server 模拟数据
// const jsonServer = require('json-server')
// const apiServer = jsonServer.create()
// const apiRouter = jsonServer.router(path.join(__dirname, 'db.json'))
// const middlewares = jsonServer.defaults()

// apiServer.use(middlewares)
// apiServer.use('/api', apiRouter)
// apiServer.listen(8081, () => {
//   console.log('JSON Server is running')
// })

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
    // express 模拟数据    
    // before(app) {
    //   app.get('/api/newsList', (req, res) => {
    //     res.json({
    //       errno: 0,
    //       data: newsList
    //     })//接口返回json数据，上面配置的数据newsList就赋值给data请求后调用
    //   })
    // }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
