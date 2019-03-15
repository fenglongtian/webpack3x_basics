// 这是 main.js 是我们项目的JS入口文件

// 1. 导入 Jquery
// import *** from *** 是ES6中导入模块的方式
// 由于 ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
// import $ from 'jquery'
// const $ = require('jquery')


// 使用 import 语法，导入 CSS样式表
// import './css/style.css'
// import './css/index.less'
// import './css/index.scss'




// 注意： webpack, 默认只能打包处理 JS 类型的文件，无法处理 其它的非 JS 类型的文件；
// 如果要处理 非JS类型的文件，我们需要手动安装一些 合适 第三方 loader 加载器；
// 1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D
// 2. 打开 webpack.config.js 这个配置文件，在 里面，新增一个 配置节点，叫做 module, 它是一个对象；在 这个 module 对象身上，有个 rules 属性，这个 rules 属性是个 数组；这个数组中，存放了，所有第三方文件的 匹配和 处理规则；

// class 关键字，是ES6中提供的新语法，是用来 实现 ES6 中面向对象编程的方式
// class Person {
//     // 使用 static 关键字，可以定义静态属性
//     // 所谓的静态属性，就是 可以直接通过 类名， 直接访问的属性
//     // 实例属性： 只能通过类的实例，来访问的属性，叫做实例属性
//     static info = { name: 'zs', age: 20 }
// }

// 访问 Person 类身上的  info 静态属性
// console.log(Person.info)
// 在 webpack 中，默认只能处理 一部分 ES6 的新语法，一些更高级的ES6语法或者 ES7 语法，webpack 是处理不了的；这时候，就需要 借助于第三方的 loader，来帮助webpack 处理这些高级的语法，当第三方loader 把 高级语法转为 低级的语法之后，会把结果交给 webpack 去打包到 bundle.js 中
// 通过 Babel ，可以帮我们将 高级的语法转换为 低级的语法


import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'
import 'bootstrap/dist/js/bootstrap.js';
$(function () {

})

