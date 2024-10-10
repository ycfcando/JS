### AMD和CommonJS区别
CommonJS时node中使用的主要读取本地文件，执行是同步的
AMD用来解决浏览器端文件通常是异步加载的，执行时异步的

### CommonJS用法
1. 导出 exports.xxx 或 module.exports
2. 导入 require
3. 导入导出的其实时exports对象

### ES Module和CommonJS区别
1. ES Module在静态导入，CommonJS时动态导入
2. ES Module为异步加载，CommonJS为同步加载

### ES Module的用法
1. 导出 export default、export
2. 导入 import from
