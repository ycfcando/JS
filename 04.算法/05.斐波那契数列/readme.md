### 斐波那契数列
定义：f(1)=1、f(2)=1、f(n)=f(n-1)+f(n-2)
目的：不是考量实现结果，而是实现过程，要求性能尽可能优化。
思路：使用缓存的方式，保存中间变量，达到n次出结果。