/**
 * 延时输出文本(手动返回对象实现)
 * @description 运用知识点：1.Promise 2.链式调用手动返回对象实现
 */
const print = (text, delay) => {
  const printObject = {
    dask: [{ text, delay }],
    print(t, d) {
      this.dask.push({
        text: t,
        delay: d,
      });

      return this;
    },
  };

  Promise.resolve("init").then(() => {
    if (printObject.dask?.length > 0) {
      printObject.dask.reduce((acc, cur) => {
        return acc.then(
          () =>
            new Promise((resolve) => {
              setTimeout(() => {
                console.log(cur.text);
                resolve("success");
              }, cur.delay);
            })
        );
      }, Promise.resolve("init"));
    }
  });

  return printObject;
};

// print("a", 5000).print("b", 1000).print("c", 1000);
// print("al", 1000).print("b2", 1000).print("c3", 1000);

/**
 * 延时输出文本(构造函数实现)
 * @description 运用知识点：1.Promise 2.构造函数实现
 */
class Print {
  constructor(text, delay) {
    this.dask = [];
    if (text !== undefined && Number.isInteger(delay)) {
      this.dask.push({ text, delay });
    }

    Promise.resolve("init").then(() => {
      if (this.dask?.length > 0) {
        this.dask.reduce((acc, cur) => {
          return acc.then(
            () =>
              new Promise((resolve) => {
                setTimeout(() => {
                  console.log(cur.text);
                  resolve("success");
                }, cur.delay);
              })
          );
        }, Promise.resolve("init"));
      }
    });
  }

  print(text, delay) {
    this.dask.push({
      text,
      delay,
    });

    return this;
  }
}

new Print("a", 5000).print("b", 1000).print("c", 1000);
new Print("al", 1000).print("b2", 1000).print("c3", 1000);
