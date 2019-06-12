/**
 * webpack配置文件
 */
var path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 启动时,自动打开浏览器
  devServer: {
    open: true
  },
  lintOnSave: true, // eslint开关
  runtimeCompiler: true, // 是否使用包含运行时编译器的Vue内核版本
  productionSourceMap: false,
  chainWebpack: config => {
      // config.entry.app = [], // 入口文件
      config.resolve.alias // 别名配置
        .set("src", resolve("src"))
        .set("api", resolve("src/api"))
        .set("assets", resolve("src/assets"))
        .set("components", resolve("src/components"))
        .set("config", resolve("src/config"))
        .set("mixins", resolve("src/mixins"))
        .set("router", resolve("src/router"))
        .set("utils", resolve("src/utils"))
        .set("views", resolve("src/views"))
        .set("@vuex", resolve("src/vuex"));
  },
  css: {
    // // 启用 CSS modules
    // modules: false,
    // // 是否使用css分离插件
    // extract: true,
    // // 开启 CSS source maps?
    // sourceMap: false,
    // // css预设器配置项
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        data: `@import "@/assets/styles/common.scss";`
      }
    }
  }
};
