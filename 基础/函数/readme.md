### 函数
定义：复用逻辑的一种方式
1. 分为function函数和箭头函数
2. 含有内部参数this和arguments

#### function函数
定义：函数的一种使用形式
1. this可以动态或静态绑定；有内部参数arguments；

#### 箭头函数
定义：函数的一种使用形式
1. this不可以静态或动态绑定；无内部参数arguments；
2. 不可以作为构造函数

#### arguments
定义：函数内部的变量；返回传递给函数的参数(已弃用)

#### this
定义：函数内部的变量；函数调用时所绑定的对象。

##### 绑定行为
1. 默认绑定：function方式this谁调用指向谁；箭头函数来自上级作用域的this
2. 显示绑定：绑定谁指向谁；对箭头函数无效
3. 显示绑定会覆盖默认绑定

##### 绑定this的函数
Function.prototype.apply、Function.prototype.call、Function.prototype.bind
1. 调用区别：apply、call绑定即调用；bind只绑定不调用；
2. 传参区别：apply参数传递数组或可迭代对象；call、bind只能逐个提供参数；

### 知识点
1. function函数创建运用
