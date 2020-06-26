const path = require("path");
module.exports = {
  lintOnSave: false,
  publicPath: './',
  configureWebpack: config => {
    config.resolve = {
      // 配置解析别名
      extensions: [".js", ".json", ".vue"], // 自动添加文件名后缀
      alias: {
        vue: "vue/dist/vue.js",
        "@": path.resolve(__dirname, "./src"),
        "@style": path.resolve(__dirname, "./src/style"),
        "@imgs": path.resolve(__dirname, "./src/assets/imgs"),
        "@c": path.resolve(__dirname, "./src/components"),
        "@api": path.resolve(__dirname, "./src/api")
      }
    };
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "./src/style/main.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  devServer: {
    open: false, // 编译完成是否打开网页
    host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      /**
       * ==> 开发阶段的跨域
       * 当请求地址是以/devApi开头的，会将其替换target的属性值
       *  eg: http://www.web-jshtml.cn/productapi/devApi
       */
      "/devApi": {
        target: "http://test4.tx131.com:8713/", //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          // 正则表达式 验证将/devApi开头的替换成空串
          "^/devApi": ""
        }
      }
    },
    overlay: {
      // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    }
    // before: app => {}
  },
  pluginOptions: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  }
}