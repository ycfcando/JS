### 浅拷贝
定义：复制对象可枚举的自有属性，生成新对象。
作用：生成新对象，以在改动对象时不会影响旧对象。
思路：
直接使用object.assign、
用object.prototype.protertyIsEnumerable检测可枚举属性
用object.prototype.hasOwnProperty检测自有属性

### 深拷贝
定义：复制对象自有可枚举属性，同时若属性为引用类型则也进行拷贝。
作用：生成新对象以及对象属性的引用类型，使操作新对象时不会改变原有对象或其下的引用类型。
思路：Object.assign快速浅拷贝、递归来处理属性的引用类型。
注意：Date和RegExp两种类型不能直接复制，需要特殊方式。