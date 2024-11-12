/* 深拷贝 */
function deepCopy(object) {
  const newObject = Object.assign({}, object);

  for (const key in newObject) {
    const value = newObject[key];

    if (typeof value === "object" && value !== null) {
      const test = Object.prototype.toString.bind(value);
      const type = test(value);

      if (type === "[object Date]") {
        newObject[key] = new Date(value);
      } else if (type === "[object RegExp]") {
        newObject[key] = new RegExp(value);
      } else {
        newObject[key] = deepCopy(value);
      }
    }
  }

  return newObject;
}

const object1 = {
  a: {
    b: new Date(),
    c: new RegExp(),
  },
};

const object2 = deepCopy(object1);

console.log(object1, object2);
