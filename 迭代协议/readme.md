### 可迭代协议
定义：定制对象的迭代行为
1. 对象必须实现`[Symbol.iterator]()`方法

### `[Symbol.iterator]()`方法
定义：定制对象迭代行为的方法
1. 无参数函数
2. 返回值为符合迭代器协议的对象

### 迭代器协议
定义：`[Symbol.iterator]()`方法所返回的对象
1. 实现next()方法
2. 可选实现return()和throw()方法

### next()方法
定义：迭代器协议规定实现的方法
1. 无参数
2. 返回值为IteratorResult接口的对象

### IteratorResult接口
定义：next()方法规定的返回值
1. value：迭代时返回的值
2. done：是否已经迭代完毕

### 应用
1. for...in和for...of的区别
2. 遍历Map的方式
3. 实现一个可迭代对象
