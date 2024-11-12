// 1.构造函数实现
class Class1 {
  value = 0;

  add(value) {
    this.value += value;
    return this;
  }
}

const class1 = new Class1();

// console.log(class1.add(1).add(2).value);

// 2.手动返回对象实现
const add = (v) => {
  const obj = {
    value: v,
    add(value) {
      this.value += value;
      return this;
    },
  };
  return obj;
};

// console.log(add(1).add(2).value);
