### Promise.all
定义：接受一个可迭代对象，该对象由promise对象所组成；返回一个promise对象，
如果入参所有promise对象全都兑现，则返回所有兑现结果组成的数组，如果有一个
promise对象拒绝，则返回该promise对象拒绝的原因。
作用：处理多个场景需要并发处理，且所有场景必须条件满足才能执行后续工作的情况。
思路：利用promise、then、catch实现。