/*
 * @Author: lixingda
 * @Desc: 继承Error基类，开发异常处理方法
 * @Date: 2019-06-08 15:36:47
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-08 15:52:47
 */
class HttpException extends Error {
  constructor(msg = "服务器异常", errorCode = 10001, code = 400) {
    // 调用基类的构造函数
    super();
    this.msg = msg;
    this.errorCode = errorCode;
    this.code = code;
  }
}
module.exports = { HttpException };
