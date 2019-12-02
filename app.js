/*
 * @Author: lixingda
 * @Desc: 路由自动加载
 * @Date: 2019-12-01 16:58:52
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-12-02 17:31:04
 */

const koa = require("koa");
const requireDirector = require("require-directory");
const Router = require("koa-router");

const app = new koa();

require("./app/models/user");

requireDirector(module, "./app/api", {
  visit: moduleItem => {
    // 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链
    if (moduleItem instanceof Router) {
      app.use(moduleItem.routes());
    }
  }
});
app.listen(3000);
