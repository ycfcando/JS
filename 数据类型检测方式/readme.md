### typeof检测数据类型
优势：判断方法简单
问题：null返回的是object，无法精确判断引用类型

### instanceof检测数据类型
原理：构造函数的 prototype 属性是否出现在某个实例对象的原型链上
优势：可以正确判断对象类型
问题：无法判断原始类型；且出现在该原型链上的构造函数原型构造函数都会被判断为真

### constructor检测数据类型
原理：对象的constructor是否是对应的构造函数
优势：能够判断部分原始类型，能正确判断引用类型
问题：undefined, null类型无法判断；构造函数的prototype可以被改变，可能无法正确判断

### Object.prototype.toString.call()检测数据类型
原理：通过查询属性Symbol.toStringTag返回对应类型字符串描述
优势：内置类型都能正确判断
问题：自定义构造函数需要原型上定义Symbol.toStringTag属性才能准确判断