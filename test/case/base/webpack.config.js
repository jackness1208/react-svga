'use strict'
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const extFs = require('yyl-fs')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const extOs = require('yyl-os')

const util = require('yyl-util')

// + setting
const config = {
  proxy: {
    port: 5000,
    homePage: 'http://127.0.0.1:5000/'
  },
  alias: {
    'dirname': __dirname,
    'root': path.join(__dirname, 'dist'),
    'srcRoot': path.join(__dirname, 'src'),

    'jsDest': path.join(__dirname, 'dist/assets/js'),
    'htmlDest': path.join(__dirname, 'dist/'),
    'cssDest': path.join(__dirname, 'dist/assets/css'),
    'imagesDest': path.join(__dirname, 'dist/assets/images'),
    '~r': path.join(__dirname, '../../../output')
  },
  dest: {
    basePath: '/'
  },
  concat: {}
}

config.concat[path.join(config.alias.jsDest, 'vendors.js')] = [
  path.join(config.alias.srcRoot, 'js/a.js'),
  path.join(config.alias.srcRoot, 'js/b.js')
]

config.concat[path.join(config.alias.jsDest, 'vendorsV2.js')] = [
  path.join(config.alias.srcRoot, 'js/a.js'),
  path.join(config.alias.srcRoot, 'js/b.js'),
  path.join(config.alias.jsDest, 'index.js')
]

config.concat[path.join(config.alias.cssDest, 'vendors.css')] = [
  path.join(config.alias.srcRoot, 'css/a.css'),
  path.join(config.alias.srcRoot, 'css/b.css')
]

config.concat[path.join(config.alias.cssDest, 'vendorsV2.css')] = [
  path.join(config.alias.srcRoot, 'css/a.css'),
  path.join(config.alias.srcRoot, 'css/b.css'),
  path.join(config.alias.cssDest, 'index.css')
]

// - setting

const wConfig = {
  mode: 'development',
  entry: (() => {
    const iSrcRoot = path.isAbsolute(config.alias.srcRoot)
      ? config.alias.srcRoot
      : path.join(__dirname, config.alias.srcRoot)

    let r = {}

    // multi entry
    var entryPath = path.join(iSrcRoot, 'entry')

    if (fs.existsSync(entryPath)) {
      var fileList = extFs.readFilesSync(entryPath, /\.(js|tsx?)$/)
      fileList.forEach((str) => {
        var key = path.basename(str).replace(/\.[^.]+$/, '')
        if (key) {
          r[key] = [str]
        }
      })
    }

    return r
  })(),
  output: {
    path: path.resolve(__dirname, config.alias.jsDest),
    filename: '[name]-[hash:8].js',
    chunkFilename: 'async_component/[name]-[chunkhash:8].js',
    publicPath: util.path.join(
      config.dest.basePath,
      path.relative(config.alias.root, config.alias.jsDest),
      '/'
    )
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        use: (() => {
          const loaders = [
            {
              loader: 'babel-loader',
              query: (() => {
                if (!config.babelrc) {
                  return {
                    babelrc: false,
                    cacheDirectory: true
                  }
                } else {
                  return {}
                }
              })()
            }
          ]

          return loaders
        })()
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            use: ['pug-loader']
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: '[name]-[hash:8].[ext]',
            chunkFilename: 'async_component/[name]-[chunkhash:8].js',
            outputPath: path.relative(config.alias.jsDest, config.alias.imagesDest),
            publicPath: (function () {
              let r = util.path.join(
                config.dest.basePath,
                path.relative(config.alias.root, config.alias.imagesDest),
                '/'
              )
              return r
            })()
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
    alias: config.alias
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 样式分离插件
    new MiniCssExtractPlugin({
      filename: util.path.join(
        path.relative(
          config.alias.jsDest,
          path.join(config.alias.cssDest, '[name]-[chunkhash:8].css')
        )
      ),
      chunkFilename: '[name]-[chunkhash:8].css',
      allChunks: true
    })
  ],
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        uglifyOptions: {
          ie8: false
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}

// + html output
wConfig.plugins = wConfig.plugins.concat(
  (function () {
    // html 输出
    const entryPath = util.path.join(config.alias.srcRoot, 'entry')
    let outputPath = []
    const r = []

    if (fs.existsSync(entryPath)) {
      outputPath = outputPath.concat(extFs.readFilesSync(entryPath, /(\.jade|\.pug|\.html)$/))
    }

    const outputMap = {}
    const ignoreExtName = function (iPath) {
      return iPath.replace(/(\.jade|.pug|\.html|\.js|\.css|\.ts|\.tsx|\.jsx)$/, '')
    }

    outputPath.forEach((iPath) => {
      outputMap[ignoreExtName(iPath)] = iPath
    })

    const commonChunks = []
    const pageChunkMap = {}
    Object.keys(wConfig.entry).forEach((key) => {
      let iPaths = []
      if (util.type(wConfig.entry[key]) === 'array') {
        iPaths = wConfig.entry[key]
      } else if (util.type(wConfig.entry[key]) === 'string') {
        iPaths.push(wConfig.entry[key])
      }

      let isPageModule = null
      iPaths.some((iPath) => {
        const baseName = ignoreExtName(iPath)
        if (outputMap[baseName]) {
          isPageModule = baseName
          return true
        }
        return false
      })

      if (!isPageModule) {
        commonChunks.push(key)
      } else {
        pageChunkMap[isPageModule] = key
      }
    })

    outputPath.forEach((iPath) => {
      const iBaseName = ignoreExtName(iPath)
      const iChunkName = pageChunkMap[iBaseName]
      const fileName = ignoreExtName(path.basename(iPath))
      let iChunks = []

      iChunks = iChunks.concat(commonChunks)
      if (iChunkName) {
        iChunks.push(iChunkName)
      }

      if (iChunkName) {
        const opts = {
          template: iPath,
          filename: path.relative(
            config.alias.jsDest,
            path.join(config.alias.htmlDest, `${fileName}.html`)
          ),
          chunks: iChunks,
          chunksSortMode(a, b) {
            return iChunks.indexOf(a.names[0]) - iChunks.indexOf(b.names[0])
          },
          inlineSource: '.(js|css|ts|tsx|jsx)\\?__inline$',
          minify: false
        }

        r.push(new HtmlWebpackPlugin(opts))
      }
    })

    return r
  })()
)
// - html output

// + dev server
wConfig.devServer = {
  contentBase: config.alias.root,
  compress: true,
  port: config.proxy.port,
  hot: true,
  publicPath: config.dest.basePath,
  writeToDisk: true,
  async after() {
    if (config.proxy.homePage) {
      await extOs.openBrowser(config.proxy.homePage)
    }
  }
}
// - dev server

module.exports = wConfig
