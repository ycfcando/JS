/* 斐波那契数列 */
class FibonacciSequence {
  n = 0;
  times = 0;
  value = 0;

  constructor(n, type = "cache") {
    this.n = n;
    switch (type) {
      case "tradition":
        this.value = this.#tradition(n);
        break;
      case "cache":
        this.#cache();
        break;
      default:
        break;
    }
  }

  /* 传统递归实现方式：性能损耗大N=2^0+2^1+...2^n-2的次数 */
  #tradition(n) {
    this.times++;
    return n === 1 || n === 2
      ? 1
      : this.#tradition(n - 1) + this.#tradition(n - 2);
  }

  /* 性能缓存实现方式：性能损耗小N=n的次数 */
  #cache() {
    const n = this.n;
    let prev = 1;
    let next = 1;
    let index = 3;
    this.times++;

    switch (n) {
      case 1:
        return f1;
      case 2:
        return f2;
      default:
        while (index < n) {
          this.times++;
          const result = prev + next;
          prev = next;
          next = result;
          index++;
        }
    }

    this.value = prev + next;
  }
}

console.log(new FibonacciSequence(6, "cache"));
