### 基本数据类型
1. string：表示字符数据
2. number：表示可计算的数据
3. boolean：提供表示真假两种值的数据
4. undefined：表示未定义的标识数据
5. null：表示无对象的标识数据
6. object：用于存储键值集合或者更复杂的集合体
7. symbol：用来创建一个唯一的值
8. bigint：用来存储大数（±(2^53-1)）

### 原始数据类型
定义：存的时值本身；存储在内存栈中，不可变
1. string、number、boolean、undefined、null、symbol、bigint

### 引用数据类型
定义：存的是值地址；地址存在内存栈中，数据存在内存堆中，可变
1. array、object、set、map、function

### 自动装箱行为
JS处理原始值的一种默认行为，即原始值使用属性方法时会自动使用构造函数包装对其包装替使用

### 应用
1. symbol和bigint的使用
2. 检测数据类型的方式：Object.prototype.toString.call()最佳方案

### 知识点
1. 说说基本数据类型
2. 原始数据类型、引用数据类型